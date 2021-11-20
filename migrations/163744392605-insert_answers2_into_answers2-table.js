const answers2Array = [
  {
    answer_id: 1,
    answer_text:
      "[TALK DOWN] You know, it's not about what I want. It's about what you want. Deep in your heart, your deepest desires. And they tell you that you need someone to blame for your miserable lot in life. I offer you that opportunity, take it.",
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
  console.log('Inserting answers2 into answers2 table...');

  for (const item of answers2Array) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO answers2
				(answer_id, answer_text, correct)
			VALUES
				(${item.answer_id}, ${item.answer_text}, ${item.correct});
				`;
  }
};
exports.down = async function down(sql) {
  console.log('Deleting answers2 from answers2 table...');

  for (const item of answers2Array) {
    await sql`
        DELETE FROM
          answers2
        WHERE
        answer_id = ${item.answer_id} AND answer_text = ${item.answer_text}AND correct = ${item.correct};
          `;
  }
};
