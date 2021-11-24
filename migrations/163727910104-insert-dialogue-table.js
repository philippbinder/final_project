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
    description_text:
      'You walk up to the tallest house in the village, eager to unleash the epiphany of rhetoric and demagogy. Bright words for dark deeds form naturally in your mind as you knock on the door with utter self-confidence. Dressed to impress, deceive for mischief. The door opens and out steps a mountain of a man. Barerly fitting through the door frame thanks to all his huge size and the layers upon layers of muscles. The frowns upon you and you start sweating and panicking',
    question_text:
      'Great. Another idiot in our village, this time even dressed like wannabe aristocracy. Get lost, now!',
    fail_text:
      '[The answer of the man follows swiftly: Angered by your laughable appearance and performance, the man grabs you easily with a swift movement. The next thing you can remember is a fist, almost half the size of your head, crushing down on your face. You wake up next in the horse stable at the neighboring house.]',
    succeed_text:
      'You run far away, the village long out of sight, deep in the woods, you still keep running until trip over a stone and are knocked out. After ypu regain consciousness you start your long way back to the village.',
    answer1:
      "[PANIC] Dea... Dea.... Dea-dea-dear ge-ge-ge-gentleman!... I-I-I see you-you-you are a man of the qui-qui-qui-quill, ra-ra rather than the the the sword. Would would would'nt you li-li-like t-t-t-to join me me me in ki-ki-ki-lling the mayoress?",
    answer2:
      '[RUN] Almost in an instance you turn around and start running as fast as your legs can carry you. No matter the direction, no matter the embarrassment. As you sprint away, you turn your head and shout: "I will return! Forever undefeated!',
    answer3:
      '[FIGHT] Like an absolut amateur, you start hopping from one leg on to the other and start swinging your fists infront of you almost in a full circle. Sheer terror is written in your eyes. You gather all your courage and shout: "Bring it, wimp!"',
    correct_answer: 'answer2',
  },
  {
    dialogue_id: 3,
    description_text: '',
    question_text:
      'A little girl opens the door. But it matter does it not, you are out for vengeance and blood.',
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
    answer1: 'Placeholder',
    answer2: 'Placeholder',
    answer3: 'Placeholder',
    correct_answer: 'answer1',
  },
  {
    dialogue_id: 10,
    description_text: '',
    question_text: 'Placeholder',
    fail_text: 'Placeholder',
    succeed_text: 'Placeholder',
    answer1: 'Placeholder',
    answer2: 'Placeholder',
    answer3: 'Placeholder',
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
				(dialogue_id, description_text, question_text, fail_text, succeed_text, answer1, answer2, answer3, correct_answer)
			VALUES
				(${item.dialogue_id}, ${item.description_text} ,${item.question_text}, ${item.fail_text}, ${item.succeed_text}, ${item.answer1}, ${item.answer2}, ${item.answer3}, ${item.correct_answer});
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
        dialogue_id = ${item.dialogue_id} AND description_text = ${item.description_text} AND question_text = ${item.question_text} AND fail_text = ${item.fail_text} AND succeed_text = ${item.succeed_text} AND answer1 = ${item.answer1} AND answer2 = ${item.answer2} AND answer3 = ${item.answer3} AND correct_answer = ${item.correct_answer};
          `;
  }
};
