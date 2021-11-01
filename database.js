import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

dotenvSafe.config(); // will read the environment variables in the .env file and this line needs to before any lines related to postgres, if not, the database will not be connected

const sql = postgres();
