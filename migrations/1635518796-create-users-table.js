exports.up = async function up(sql) {
  console.log('Creating users table...');
  await sql`
		CREATE TABLE users (
			id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			name VARCHAR(50) NOT NULL,
			username VARCHAR(40) UNIQUE NOT NULL,
			password_hash VARCHAR(60) NOT NULL
		);
	`;
};

exports.down = async function down(sql) {
  console.log('Dropping users table...');
  await sql`DROP TABLE users`;
};