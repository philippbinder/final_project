const answers1Array = [
  {
    answer_id: 1,
    answer_text:
      "[INVOKE PPREJUDICE] Look at her hair! It's red! Everybody knows that gingers have no souls and make for excellent burning material. Better get that wood choopin' sir. Winter is coming. (Season 8 never happend)",
    correct: false,
  },
  {
    answer_id: 2,
    answer_text: 'Placeholder',
    correct: false,
  },
  {
    answer_id: 3,
    answer_text: 'Placeholder',
    correct: false,
  },
  {
    answer_id: 4,
    answer_text: 'Placeholder',
    correct: false,
  },
  {
    answer_id: 5,
    answer_text: 'Placeholder',
    correct: false,
  },
  {
    answer_id: 6,
    answer_text: 'Placeholder',
    correct: false,
  },
  {
    answer_id: 7,
    answer_text: 'Placeholder',
    correct: false,
  },
  {
    answer_id: 8,
    answer_text: 'Placeholder',
    correct: false,
  },
  {
    answer_id: 9,
    answer_text: 'Placeholder',
    correct: false,
  },
  {
    answer_id: 10,
    answer_text: 'Placeholder',
    correct: false,
  },
];

exports.up = async function up(sql) {
  console.log('Inserting answers1 into answers1 table...');
  console.log('answers1Array:', answers1Array);

  for (const item of answers1Array) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO answers1
				(answer_id, answer_text, correct)
			VALUES
				(${item.answer_id}, ${item.answer_text}, ${item.correct});
				`;
  }
};
exports.down = async function down(sql) {
  console.log('Deleting answers1 from answers1 table...');

  for (const item of answers1Array) {
    await sql`
        DELETE FROM
          answers1
        WHERE
        answer_id = ${item.answer_id} AND answer_text = ${item.answer_text}AND correct = ${item.correct};
          `;
  }
};
