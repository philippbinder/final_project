import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
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
export async function insertAnswer(
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
      INSERT INTO status
        (user_id, dialogue_id, correct_answer)
      /* DONT UPDATE since the row doesn't exists yet. Insert it? */
      VALUES
        (${userId}, ${dialogueId}, true)
      RETURNING
        *
      /* REUTRNING unnecessary? */
        `;
  } else {
    await sql`
      INSERT INTO status
        (user_id, dialogue_id, correct_answer)
      /* DONT UPDATE since the row doesn't exists yet. Insert it? */
      VALUES
        (${userId}, ${dialogueId}, false)
      RETURNING
        *
    `;
  }
}

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

export async function endGame(userId: number) {
  const userStatusArray = await getSpecificStatus(userId);
  console.log('userStatusArray:', userStatusArray);
  console.log('userStatusArray.length:', userStatusArray.length);
  const trueAnswers = userStatusArray.filter(
    (i) => i.correct_answer === true,
  ).length;
  console.log('trueAnswer =', trueAnswers); // returns count of true answers
  if (userStatusArray.length = 10) {
    if (trueAnswers >= 6) {
      // redirect/router.push youWin.tsx
      return;
    };
    elsif (trueAnswers < 6) {
    // else (trueAnswers < 6) {
      // redirect/router.puh youDied.tsx
      return;
    }
    endif
  }
  return;
}
