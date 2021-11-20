exports.up = async function up(sql) {
  console.log('Creating sessions table...');
  await sql`
		CREATE TABLE sessions (
			id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			token VARCHAR(90) UNIQUE NOT NULL,
			expiry_timestamp timestamp NOT NULL DEFAULT NOW() + INTERVAL '1 hour',
			user_id integer REFERENCES users (id) ON DELETE CASCADE
		)
	`;
};
// user_id REFERENCES users (id) heißt, dass die user_id aus dem table users die id ist.
// On delete cascade means: Once the id in the create useres table no longer exists, it will also delete the row with it's id in the sessions table.
// make sure that the 1 hour expiry timestamp is working

exports.down = async function down(sql) {
  console.log('Dropping sessions table...');
  await sql`DROP TABLE sessions`;
};