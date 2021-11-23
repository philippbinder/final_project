import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

export type User = {
  id: number;
  username: string;
  name: string | null;
};

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

// ------------------------------------------------------------------------------------------------------------------------------
// Thanks for taking to time to help me get through this mess.

export async function insertAnswer(/*I guees I need to pass something here for the button id*/) {
  const dialogueList = await getDialogue();
  // gets me the dialogue table as an array of objects

  const singleDialogue = dialogueList.find((singleDialogueItem) => {
    return (
      Number(/* Id from the button of the [dialogueId].tsx file in the dynamicDialogue folder*/) ===
      singleDialogueItem.id
    );
  });
  // out of said the new dialogueList array of objecets select the current object - for example the first row of the dialogue table

  if (singleDialogue?.correct_answer === button.id) {
    // should check if the id of the button (which is a string called "answer1", "answer2" or "answer3") from the [dialogueId].tsx file in the dynamicDialogue folder matches the the value of the correct_answer column from the dialogue table in the current row
    // ? beaucse without it I get possibly undefined message
    // Problem 1: Don't know how to pass the button id
    // Problem 2: The imported styling component in the [dialogueId].tsx file messes up the buttons - they are no longer clickable
    await sql`
      UPDATE status
      SET
        correct_answer = true
      WHERE
        status.dialogue_id = singleDialogue.dialogue_id AND status.user_id = session.userId
        /* I need to make sure that in the status the correct_answer column is updated where the row belongs to the current user AND the current dialogue - Since one user can have 10 dialogue rows unique to himself in the status table, only the current dialogue_id column should update its correct_answer column in the same row from null to true or false exactly where the user_id column matches the current user. */
        `;
  } else {
    await sql`
      UPDATE status
      SET
        correct_answer = false
      WHERE
        status.dialogue_id = singleDialogue.dialogue_id AND status.user_id = session.userId
    `;
  }
}
