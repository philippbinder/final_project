const dialogueArray = [
  {
    dialogue_id: 1,
    description_text:
      'You knock on the door, helplessly trying to get attention and babbling something about the mayoress being a witch and dancing with brooms once the sun is setting low. After nobody answeres the door you start kicking it with your feet and the door suddenly jumps wide open. A angry man appears, carrying a TEMPLAR ISIGNIA around his neck.',
    question_text:
      'I heard you the first time! Dancing brooms and making a fuss about the mayoress being a witch. Why would I listen to such nonsense?',
    fail_text:
      'An idiot rambling on about such nonsense is a rare sight to behold in our lonely village. You would be well advised to leave our village by sunset.',
    succeed_text:
      "You are totally right. Deus vult indeed! It's time for some good, old-fashioned witch-hunting.",
    answer1:
      "[INVOKE PPREJUDICE] Look at her hair! It's red! Everyone knows that gingers have no souls and are henchmen of the devil. Better sent her back to him where she belongs",
    answer2:
      "[TALK DOWN] You know, it's not about what I want. It's about what you want. Deep in your heart, your deepest desires. And they tell you that you need someone to blame for your miserable lot in life. I offer you that opportunity, take it.",
    answer3: '[DEUS VULT!!!] Deus vult, infidel!',
    correct_answer: 'answer3',
  },
  {
    dialogue_id: 2,
    description_text:
      'You walk up to the tallest house in the village, eager to unleash the epiphany of rhetoric and demagogy. Bright words for Dark Deeds form naturally in your mind as you knock on the door with utter self-confidence. Dressed to impress, deceive for mischief. The door opens and out steps a mountain of a man. Barerly fitting through the door frame thanks to his huge size and all the layers upon layers of muscles. The man frowns upon you, as your confidence crumbles to ashes. You start sweating, panicking and struggling for words.',
    question_text:
      'Great. Another idiot in our village, this time even dressed like one. Get lost.',
    fail_text:
      '[The answer of the man follows swiftly: Angered by your laughable appearance and performance, the man grabs you easily with a swift movement. The next thing you can remember is a fist, almost half the size of your head, crushing down on your face. You wake up next in the horse stable at the neighboring house.]',
    succeed_text:
      'You run far away, the village long out of sight, deep in the woods, you still keep running until trip over a stone and are knocked out. After ypu regain consciousness you start your long way back to the village.',
    answer1:
      "[PANIC] Dea... Dea.... Dea-dea-dear ge-ge-ge-gentleman!... I-I-I see you-you-you are a man of the qui-qui-qui-quill, ra-ra rather than the the the sword. Would would would'nt you li-li-like t-t-t-to join me me me in ki-ki-ki-lling the mayoress?",
    answer2:
      '[FIGHT] Like an absolut amateur, you start jumping from one leg on to the other and start swinging your fists infront of your face, almost in a full circle, all the while your squashed top hat is making small jumps as you do. Sheer terror is written in your eyes. Too proud to admit to yourself that you are utterly afraid, you gather all your courage and shout: "Bring it, wimp!"',
    answer3:
      '[RUN] Almost in an instance you turn around and start running as fast as your legs can carry you. No matter the direction, no matter the embarrassment. As you sprint away, you turn your head and shout: "I will return! Forever undefeated!',
    correct_answer: 'answer3',
  },
  {
    dialogue_id: 3,
    description_text:
      "You walk up to the next house and as the door opens, you see a little girl, looking at you with big, innocent eyes. But matter does it not to you, you are out for vengeance and blood. And this girl WILL join you in your mission to murder the mayoress, for it was her, the evil mayoress, who didn't award you first place when you were the fastet child in the anual sack race back in the days. Those days, where there was still joy and compassion in your heart. Before you left this village behind, along with your innocence and childhood, many years ago to train and forge a plan for this very moment. To rally the people of this village to murder your arch nemesis - the evil mayoress.",
    question_text:
      'He-hello mister. If you need someone to talk to, my mother will be back shortly.',
    fail_text:
      'Scarred of you, the girl quickly shuts the door with all of her strength. As you stand too close, you are suprised of the sheer force she smashes the door into your face. The door hits you hard, knocking you of your feet and you stumble backwards and land in the dirt, hitting your head on the hard ground. It takes you a minute to muster the strength to fight the pain and to get up. As soon as you are back on your feet again you start looking for your next victim.',
    succeed_text:
      'The little girl laughs, half out of amusement, half out of confusion. She says: "Haha. You dance as stupid as you look, mister." Hoping that your dance did the trick and still completly exhausted, you crawl to the nearest tree and take a short nap to recover your strength. As you wake up, you feel refreshed and evil machinations form in your mind.',
    answer1:
      '[DANCE] You start hopping, bending your knees, taking off your yellow top hat with turquoise splashes and that ridiculous chicken feather on it that you call your lucky charm. After you put your top hat back on, you begin to wave your hands wildly and start to throw your legs around, almost dislocating them. You repeat this process several times for at least two minutes. Totally exhausted, you let your dance come to an end, fall on your knees to catch your breath and look hopefully up into the girls eyes. Hoping, that your stupid dance convinced a little girl to do your bidding to kill an eldery woman.',
    answer2:
      '[LURE WITH PROMISES OF POWER] Ohhhh, I see you. I truly see you. You and your wants. Imagine: wealth, power, fame! Servants for your every needs, lands to call your own and people to rule over. The fear of your subjects, the power over life and death. All of it can be yours, all of it! If you would just join me and together we will shake the very foundations of this village!',
    answer3:
      '[RHYME] One, two, three, four, five, once I caught a mayoress alive! Six, seven, eight, nine, ten, the evil witch must hang!',
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
