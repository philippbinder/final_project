import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import Router from 'next/router';
import postgres from 'postgres';

export type User = {
  id: number;
  username: string;
  name: string | null;
};

// export type Answer = {};

// TS type User does not allow a passwordHash, therefore we create a new type based on the existing User type
export type UserWithPasswordHash = User & {
  passwordHash: string;
};

// (In this case) UserId could also be written as user_id and expiryTimestamp as expiry_timestamp since I am using camelcaseKeys everywhere to change it.
export type Session = {
  id: number;
  token: string;
  userId: number;
  expiryTimestamp: Date;
};

export type Status = {
  id: number;
  userId: number;
  dialogueId: number;
  answeredCorrectly: boolean;
};

dotenvSafe.config(); // will read the environment variables in the .env file and this line needs to before any lines related to postgres, if not, the database will not be connected

// connect one time to database
const sql = postgres();

// for the   const [user] = await sql<[User]>` in the insertUser function down below

// I can only see the use of this function being being called upton for the stretch goal of the leaderboard
export async function getAllUsers() {
  const users = await sql`
  SELECT
    id,
    us ername
  FROM
    users
  `;
  console.log('users:', users);
}

// this function can be called to get a single user based on the passed id
export async function getUser(id: number) {
  const [user] = await sql<[User]>`
    SELECT
      id,
      username
    FROM
      users
    WHERE
    id = ${id};
    `;
  console.log('User:', user);

  return camelcaseKeys(user);
}

// Careful with this function! Shows the hashes password of the user.
export async function getSingleUserWithPasswordHashByUsername(
  username: string,
) {
  const [user] = await sql<[UserWithPasswordHash | undefined]>`
    SELECT
      id,
      username,
      password_hash
    FROM
      users
    WHERE
      username = ${username}
    `;
  return user && camelcaseKeys(user);
}
// const [user] replaces const users and sql<[User]> is the <T> from TS - means the [User] is the type with all its properties

// camelcaseKeys tranforms password_hash into passwordHash

// functions die hier in der Database geschrieben haben bieten folgende Vorteile:
// - sie können außerhalb des Backends flexibel verwendet werden
// => heißt basierend auf dem Input des Users im Frontend (erstellt Account mit Password) wird dann eine Function gecalled und die eingegebenen Werte werden gepassed
// => somit wird ein neuer Account samt Password ans Backend gepassed
// - Wäre mit Migrations nicht möglich, da der User ja keinen Zugriff auf das Backend hat? Zumindestens soll er "normal" mit dem Interface interagieren.

export async function insertUser({
  /* username und passwordHash sagt in welcher Reihenfolge es inserted werden soll
  username: string und passwordHash: string sagen TS nochmals den type, da TS ansonsten error messages wirfrt */
  username,
  passwordHash,
}: {
  username: string;
  passwordHash: string;
}) {
  // const users = await sql`
  const [user] = await sql<[User]>`
    INSERT INTO users
      (username, password_hash)
      /* sind die echten Namen in dem table users  */
    VALUES
      (${username}, ${passwordHash})
      /* $ sucht den Wert in DIESER file - also was ich oben deklariert habe */
    RETURNING
      id,
      username
    `;
  // do I need RETURNING?
  return camelcaseKeys(user); // Do I need to return users or anything at all?
}

// sets up 10 rows for each new user with a null for the correct_answer column
export async function setUpUserStatus(userId: number) {
  for (let rowNumber = 1; rowNumber < 11; rowNumber++) {
    await sql`
      INSERT INTO status
        (user_id, dialogue_id, correct_answer)
      VALUES
        (${userId}, ${rowNumber}, null)
        RETURNING
      *
    `;
  }
}

// gets the current users status as an array
export async function getCurrentUserStatus(userId: number) {
  const currentUserStatusArray = await sql`
      SELECT
        *
      FROM
        status
      WHERE
        status.user_id = ${userId}
    `;
  return camelcaseKeys(currentUserStatusArray);
}

// selects the current dialogue for the status of the current user
export async function getCurrenntUserStatusDialogue(
  userId: number,
  dialogueId: number,
) {
  const userStatusDialogue = await sql`
    SELECT
      dialogue_id
    FROM
      status
    WHERE
      status.dialogue_id = ${dialogueId} AND status.user_id = ${userId};
  `;

  return userStatusDialogue;
}
// updates the current users status
// export async function updateCurrentUserStatus(
//   userId: number,
//   dialogueId: number,
// ) {
//   await sql`
//   UPDATE status
//   SET correct_answer =
//   `
//   // const currentUserStatusDialogueArray = await getCurrenntUserStatusDialogue(
//   //   userId,
//   //   dialogueId,
//   // );
//   // console.log(
//   //   'updateCurrentUserStatus currentUserStatusDialogueArray=',
//   //   currentUserStatusDialogueArray,
//   );

//   // get me the dialogue row
//   // const currentUserDialogue = currentUserStatusDialogueArray.find(
//   //   (i) => i.dialogueid === ${dialogueId},
//   // );
//   // console.log(
//   //   'updateCurrentUserStatus currentUserDdialogue =',
//   //   currentUserDialogue,
//   // );
//   return camelcaseKeys(currentUserStatusDialogueArray);
//   // still have to update it
// }

// creates a session by user_id and token
// This function recieves a token and a userId and inserts them into the database
export async function createSession(token: string, userId: number) {
  const [session] = await sql<[Session]>`
    INSERT INTO sessions
      (token, user_id)
    VALUES
      (${token}, ${userId})
    RETURNING
      *
    `;
  return camelcaseKeys(session);
}
// make sure that the 1 hour expiry timestamp is working

export async function deleteExpiredSessions() {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      expiry_timestamp < NOW()
    RETURNING *
  `;

  return sessions.map((session) => camelcaseKeys(sessions));
}

// delete session token on logout
export async function deleteSessionByToken(token: string) {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      expiry_timestamp < NOW()
    RETURNING *
  `;

  return sessions.map((session) => camelcaseKeys(sessions))[0];
}

export async function getValidSessionByToken(token: string) {
  if (!token) return undefined;

  const sessions = await sql<Session[]>`
    SELECT
      *
    FROM
      sessions
    WHERE
      token = ${token} AND
      expiry_timestamp > NOW()
  `;
  return sessions.map((session) => camelcaseKeys(session))[0];
}

// grab the dialogue from the table dialogue
export async function getDialogue() {
  const dialogueItems = await sql`
    SELECT
      *
    FROM
      dialogue
  `;

  return dialogueItems;
}

// returnme an array of one object and information about the clomuns with idFromUrlNumber
// export async function getOneDialogue(idFromUrlNumber: number) {
//   const oneDialogue = await sql`
//     SELECT
//       *
//     FROM
//       dialogue
//     WHERE
//       dialogue.dialogue_id = ${idFromUrlNumber};
//   `;

//   return oneDialogue;
// }

// same but with dialogueId passed from insertAnswer function
export async function getOneDialogue(dialogueId: number) {
  const oneDialogue = await sql`
    SELECT
      *
    FROM
      dialogue
    WHERE
      dialogue.dialogue_id = ${dialogueId};
  `;

  return oneDialogue;
}

// dialogue_id through API with dialogue_id
// updates status for user and returns updated status
export async function updateUserState(
  buttonId: string,
  dialogueId: number,
  userId: number,
) {
  const oneDialogueRowArray = await getOneDialogue(dialogueId);
  // gets me the needed row from dialogue table as an array of objects with one object
  const oneDialogueObject = oneDialogueRowArray[0];
  // gets only the one object in the array of objects
  if (oneDialogueObject.correct_answer === buttonId) {
    await sql`
      UPDATE status
      Set correct_answer = true
      WHERE
        user_id = ${userId} AND dialogue_id = ${dialogueId}
      RETURNING
        *
      /* REUTRNING unnecessary? */
        `;
  } else {
    await sql`
       UPDATE status
      Set correct_answer = false
      WHERE
        user_id = ${userId} AND dialogue_id = ${dialogueId}
      RETURNING
        *
    `;
  }
  // gets the newly updated status and returns it back to the page that called the function
  const newStatus = await sql`
    SELECT
    *
    FROM
    status
    WHERE
    user_id = ${userId}
  `;
  return camelcaseKeys(newStatus);
}

// select current answer of dialogue for current user as array
export async function getSpecificStatus(userId: number) {
  const oneStatus = await sql`
    SELECT
      correct_answer
    FROM
      status
    WHERE
      status.user_id = ${userId};
  `;

  return oneStatus;
}

// might have to rewrite this function accordingly to the new getStatusForCurrentUser function
export async function endGame(userId: number) {
  // const router = useRouter();
  // const die = '/youDied/';
  const userStatusArray = await getSpecificStatus(userId);
  console.log('endGame userStatusArray:', userStatusArray);
  console.log('endGame userStatusArray.length:', userStatusArray.length);
  const trueAnswers = userStatusArray.filter(
    (i) => i.correct_answer === true,
  ).length;
  console.log('trueAnswers =', trueAnswers); // returns count of true answers
  if (userStatusArray.length === 10) {
    if (trueAnswers >= 6) {
      console.log('------------------- You win!!!');
      return {
        redirect: {
          destination: '/youWin/',
          permanent: false,
        },
      };
    }
  } else if (trueAnswers < 6) {
    console.log('------------------- You died!!!');
    return {
      redirect: {
        destination: '/youDied/  ',
        permanent: false,
      },
    };
  }
  return;
}
