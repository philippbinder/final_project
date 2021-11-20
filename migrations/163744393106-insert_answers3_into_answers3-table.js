const answers3Array = [
  {
    answer_id: 1,
    answer_text: '[DEUS VULT!!!] Deus vult, infidel!',
    correct: true,
  },
  {
    answer_id: 2,
    answer_text:
      '[PERFECT the art of placeholding] Very convincing Placeholder',
    correct: true,
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
  console.log('Inserting answers3 into answers3 table...');

  for (const item of answers3Array) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO answers3
				(answer_id, answer_text, correct)
			VALUES
				(${item.answer_id}, ${item.answer_text}, ${item.correct});
				`;
  }
};
exports.down = async function down(sql) {
  console.log('Deleting answers3 from answers3 table...');

  for (const item of answers3Array) {
    await sql`
        DELETE FROM
          answers3
        WHERE
        answer_id = ${item.answer_id} AND answer_text = ${item.answer_text}AND correct = ${item.correct};
          `;
  }
};
