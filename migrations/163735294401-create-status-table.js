exports.up = async function up(sql) {
  console.log('Creating status table...');
  await sql`
		CREATE TABLE status (
			id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			user_id integer UNIQUE NOT NULL,
			dialogue_id integer UNIQUE NOT NULL,
			answer_id integer UNIQUE NOT NULL,
			correct_answer boolean
		);
	`;
};

exports.down = async function down(sql) {
  console.log('Dropping status table...');
  await sql`DROP TABLE status`;
};
