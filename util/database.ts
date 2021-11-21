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
    users;
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

// grab the answers from the table answers1
export async function getAnswers1() {
  const answers1Items = await sql`
    SELECT
      *
    FROM
      answers1
  `;

  return answers1Items;
}

export async function getAnswers2() {
  const answers1Items = await sql`
    SELECT
      *
    FROM
      answers2
  `;

  return answers1Items;
}

export async function getAnswers3() {
  const answers1Items = await sql`
    SELECT
      *
    FROM
      answers3
  `;

  return answers1Items;
}

// exports function to update user status
// export async function insertStatus({
//   userId,
//   dialogueId,
//   answeredCorrectly,
// }: {
//   answeredCorrectly: boolean;
//   userId: number;
//   dialogueId: number;
// }) {
//   const [status] = await sql<[Status]>`
//     INSERT INTO status
//       (user_id, dialogue_id, answered_correctly)
//     VALUES
//       (${answeredCorrectly}), (${userId}), (${dialogueId})
//     RETURNING
//      user_id,
//      dialogue_id,
//      answered_correctly
//     `;
//   return camelcaseKeys(status);
// }

// export async function insertAnswer1({
//   answer_id,
//   correct,
// }: {
//   answer_id: number;
//   correct: boolean;
// }) {
//   const [status] = await sql<[Status]>`
//     INSERT INTO status
//       (answer_id, correct)
//     SELECT
//       (${answer_id}) , (${correct})
//     FROM
//       answers1
//     WHERE
//     -- dort wo die dialogue_id die dieselbe Zahl hat wie answer_id von answers1
//     -- -> das ganze brauche ich 3mal da ich 3 answers tables habe
//     `;
//   return camelcaseKeys(status);
// }
