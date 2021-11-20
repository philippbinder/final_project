const dialogueArray = [
  {
    villager_id: 1,
    question_text: 'What do you want, outsider?',
    fail_text:
      "There is a reason why we don't welcome outsiders in our community. You would be well advised to leave our village by sunset.",
    succeed_text:
      "You are totally right. Deus vult indeed! It's time for some good, old-fashioned witch-hunting.",
  },
  {
    villager_id: 2,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
  {
    villager_id: 3,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
  {
    villager_id: 4,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
  {
    villager_id: 5,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
  {
    villager_id: 6,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
  {
    villager_id: 7,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
  {
    villager_id: 8,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
  {
    villager_id: 9,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
  {
    villager_id: 10,
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
  },
];

exports.up = async function up(sql) {
  console.log('Inserting dialogue into dialogue table...');

  for (const item of dialogueArray) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO dialogue
				(villager_id, question_text, fail_text, succeed_text)
			VALUES
				(${item.villager_id}, ${item.question_text}, ${item.fail_text}, ${item.succeed_text});
				`;
  }
};
exports.down = async function down(sql) {
  console.log('Deleting dialogue from dialogue table...');

  for (const item of dialogueArray) {
    await sql`
        DELETE FROM
          dialogue
        WHERE
        villager_id = ${item.villager_id} AND question_text = ${item.question_text} AND fail_text = ${item.fail_text} AND succeed_text = ${item.succeed_text};
          `;
  }
};
