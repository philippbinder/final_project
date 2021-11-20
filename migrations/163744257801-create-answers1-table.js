exports.up = async function up(sql) {
  console.log('Creating answers1 table...');
  await sql`
		CREATE TABLE answers1 (
			id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			answer_id integer,
			answer_text TEXT,
			correct boolean
		);
	`;
};

exports.down = async function down(sql) {
  console.log('Dropping answers1 table...');
  await sql`DROP TABLE answers1`;
};
