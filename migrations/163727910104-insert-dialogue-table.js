const dialogueArray = [
  {
    dialogue_id: 1,
    description_text:
      'You knock on the door, helplessly trying to get attention and babbling something about the mayoress being a witch and dancing with broomstick once the sun is setting low. After nobody answeres the door you start kicking it with your feet and the door suddenly jumps wide open. A large, angry man appears, carrying a TEMPLAR ISIGNIA around his neck.',
    question_text:
      'I heard you the first time! Dancing broomsticks and making a fuss about the mayoress being a witch. Why would I listen to such nonsense?',
    fail_text:
      'An idiot rambling on about such nonsense is a rare sight to behold in our lonely village. You would be well advised to leave our village by sunset.',
    succeed_text:
      "You are totally right. Deus vult indeed! It's time for some good, old-fashioned witch-hunting.",
    answer1:
      "[INVOKE PPREJUDICE] Look at her hair! It's red! Everybody knows that gingers have no souls and make for excellent burning material. Better get that wood choopin' sir. Winter is coming. (Season 8 never happend)",
    answer2:
      "[TALK DOWN] You know, it's not about what I want. It's about what you want. Deep in your heart, your deepest desires. And they tell you that you need someone to blame for your miserable lot in life. I offer you that opportunity, take it.",
    answer3: '[DEUS VULT!!!] Deus vult, infidel!',
    correct_answer: 'answer3',
  },
  {
    dialogue_id: 2,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer3',
  },
  {
    dialogue_id: 3,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer1',
  },
  {
    dialogue_id: 4,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer2',
  },
  {
    dialogue_id: 5,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer1',
  },
  {
    dialogue_id: 6,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer2',
  },
  {
    dialogue_id: 7,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer3',
  },
  {
    dialogue_id: 8,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer3',
  },
  {
    dialogue_id: 9,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer1',
  },
  {
    dialogue_id: 10,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder,',
    answer2: 'Placeholder,',
    answer3: 'Placeholder,',
    correct_answer: 'answer2',
  },
];

exports.up = async function up(sql) {
  console.log('Inserting dialogue into dialogue table...');

  for (const item of dialogueArray) {
    // item is like i - behaves the same like the placeholder name in a .map() method

    // Looping over the array and inserting each item
    await sql`
			INSERT INTO dialogue
				(dialogue_id, description_text, question_text, fail_text, succeed_text, answer1, answer2, answer3)
			VALUES
				(${item.dialogue_id}, ${item.description_text} ,${item.question_text}, ${item.fail_text}, ${item.succeed_text}, ${item.answer1}, ${item.answer2}, ${item.answer3});
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
        dialogue_id = ${item.dialogue_id} AND description_text = ${item.description_text} AND question_text = ${item.question_text} AND fail_text = ${item.fail_text} AND succeed_text = ${item.succeed_text} AND answer1 =${item.answer1} AND answer2 =${item.answer2} AND answer3 =${item.answer3};
          `;
  }
};
