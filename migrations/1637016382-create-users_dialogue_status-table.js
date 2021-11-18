exports.up = async function up(sql) {
  console.log('Creating users_dialogue_status table...');
  await sql`
		CREATE TABLE users_dialogue_status (
			id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			user_id integer UNIQUE NOT NULL,
			dialogue_id integer,
			answer_status boolean
		);
	`;
};

exports.down = async function down(sql) {
  console.log('Dropping users_dialogue_status table...');
  await sql`DROP TABLE users_dialogue_status`;
};