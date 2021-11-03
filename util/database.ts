import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

dotenvSafe.config(); // will read the environment variables in the .env file and this line needs to before any lines related to postgres, if not, the database will not be connected

const sql = postgres();

// I can only see the use of this function being being called upton for the stretch goal of the leaderboard
export async function getAllUsers() {
  const users = await sql`
  SELECT * FROM users;
  `;
  console.log('users:', users);
}

// this function can be called to get a single user based on the passed id - problem with id
export async function getSingleUser(id: number) {
  const users = await sql`
    SELECT * FROM users WHERE ID = ${id};
    `;
  const singleUser = users[0];
  console.log('singleUser:', singleUser);

  return singleUser;
}

// functions die hier in der Database geschrieben haben bieten folgende Vorteile:
// - sie können außerhalb des Backends flexibel verwendet werden
// => heißt basierend auf dem Input des Users im Frontend (erstellt Account mit Password) wird dann eine Function gecalled und die eingegebenen Werte werden gepassed
// => somit wird ein neuer Account samt Password ans Backend gepassed
// - Wäre mit Migrations nicht möglich, da der User ja keinen Zugriff auf das Backend hat? Zumindestens soll er "normal" mit dem Interface interagieren.

export async function insertUser(username: string, password_hash: string) {
  const users = await sql`
    INSERT INTO users
      (username, password_hash)
    VALUES
      (${username}, ${password_hash})
    `;
  return users; // Do I need to return users or anything at all?
}
