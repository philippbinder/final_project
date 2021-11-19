const dialogueArray = [
  {
    villager_id: '1',
    question_text: 'What do you want, outsider?',
    answer1_text:
      "Look at her hair! It's red! Everybody knows that gingers have no souls and make for excellent burning material. Better get that wood choopin' sir.",
    answer2_text:
      "You know, it's not about what I want. It's about what you want. Deep in your heart, your deepest desires. And they tell you that you need someone to blame for your miserable lot in life. I offer you that opportunity, take it.",
    answer3_text: 'Deus vult, infidel!',
    fail_text:
      "There is a reason why we don't welcome outsiders in our community. You would be well advised to get to leave our village tonight.",
    succeed_text:
      "You are totally right. Deus vult indeed! It's time for some good old fashioned witch-hunting.",
  },
];

exports.up = async function up(sql) {
  console.log('Inserting dialogue into dialogue table...');

  for (const item of dialogueArray) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO dialogue
				(villager_id, question_text, answer1_text, answer2_text, answer3_text, fail_text, succeed_text)
			VALUES
				(${item.villager_id}, ${item.question_text}, ${item.answer1_text}, ${item.answer2_text}, ${item.answer3_text}, ${item.fail_text}, ${item.succeed_text});
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
        villager_id = ${item.villager_id} AND question_text = ${item.question_text}AND answer1_text = ${item.answer1_text} AND answer2_text = ${item.answer2_text} AND answer3_text = ${item.answer3_text} AND fail_text = ${item.fail_text} AND succeed_text = ${item.succeed_text};
          `;
  }
};
