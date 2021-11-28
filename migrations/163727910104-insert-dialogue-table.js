const dialogueArray = [
  {
    dialogue_id: 1,
    description_text:
      'You knock on the door, helplessly trying to get attention and babbling something about the mayoress being a witch and dancing with brooms once the sun is setting low. After nobody answeres the door you start kicking it with your feet and the door suddenly jumps wide open. A angry man appears, carrying a TEMPLAR ISIGNIA around his neck.',
    question_text:
      'I heard you the first time! Dancing brooms and making a fuss about the mayoress being a witch. Why would I listen to such nonsense?',
    fail_text:
      '[VILLAGER] An idiot rambling on about such nonsense is a rare sight to behold in our lonely village. You would be well advised to leave our village by sunset.',
    succeed_text:
      "[VILLAGER] You are totally right. Deus vult indeed! It's time for some good, old-fashioned witch-hunting.",
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
    description_text:
      "Arguments as sharp as the tip of a swords are prepared in your mind, ready to be used for deception. But as you knock on the door, a woman scarred by the years opens, obviously confused. Your recognize her as your aunt Gewndolin. Allthough your face looks familiar to her, she can't quite tell who you are.",
    question_text:
      'Is that you Griselbert, or my dear Attrachlsdrat? Or could it even be that our Aetius has returned?',
    fail_text:
      "[VILLAGER] No, that's not how remember you. You wish to trick an eldery woman, but tricked I shall be not. What I shall is reamain here and contiune staring at the door until someone knocks again.",
    succeed_text:
      '[VILLAGER] Attracchsldrat! It really is you. Do not worry, my dear. I have not forgotten how that mayoress wronged our house. Blood shall be spilled tonight, for our family name, for the sack race!',
    answer1:
      '[Pretend to be Griselbert, the Last Man of Honor] Fear no more, child. For I am Griselbert, the one who will restore honor to this village and cleanse it of the wicked evil that festers deep within. Rejoice, for all that is needed is your unconditional obedience.',
    answer2:
      '[Be yourself - Attrachlsdrat, The Vengeful One] Ahhh, there you are! Long has it been since you last layed eyes on me. But worry not, for I have not forgotten your despair and wrath you share with me, your favorite nephew. But the time has finally come. Vengeance will be ours and we will restore glory to our house and reclaim the title of the fastet sack racer for our family. ',
    answer3:
      '[Pretend to be Aetius, The Promised Savior] Yes, dearest. Worry no more thou shall, for I, Aetius, have returned. Returned, to bannish the darkness and bring back his Lords loving embrace to our village. If only thou heed my command once called upon.',
    correct_answer: 'answer2',
  },
  {
    dialogue_id: 5,
    description_text:
      "Ready to drag another soul down with you into damnation, you are ready to talk the next villager. But this time, the village doesn't live in ahouse, but something like a moving market. A bad omen? Ready to bring your whole rhetorical might crushing down on your vis-à-vis. But to your surpise, you hear knocking sounds coming from inside the house. Moments later the door gets knocked wide upon. Being denied the honor of knocking first, your face turns red and anger overwhelms you. You look the man in the eyes and out of principle your raise your first and knock his door, all the while keeping eye contact with him.",
    question_text:
      '[VILLAGER] yWho are you to think that YOU knock on MY door? Is there any sign on my door that says know if you want, whenever you want? Knocking is a privilges, a sacred act that attunes one with the archangels of knocking. And I have knocked on this door ever since I have been able to particapte in the holy ritual of knocking. As has my father and his father before him. And I will not have anyone knocking on MY door if I could be knock on it meyself!',
    fail_text:
      'Absolutely infuriated, the man loses his sh** as his eyes seem to almost pop out while his face turns red as blood. Without hestiation and any words, he reaches for his club and smashes it as hard as he can on your head. The moment you feel the pain you are already knocked out. You wake up a few minutes later infront of this likeable villagers house with a huge bulge on your forehead. Knowing better than to knock on his door again, you leave for the next house.',
    succeed_text:
      '[VILLAGER] Killing? Killing someone just because they might knock on my door? A splendid idea! And afterwards I will kill you for actually knocking on my door.',
    answer1:
      '[LOSE TEMPER] I knock on EVERY DOOR WHENEVER I want and WHEREVER I want! And I will not relinquish the freedom of knocking on doors because of some lunatic who spends his time knocking on his own door from the inside! And if I desire to knock on your door, I will do so anytime.',
    answer2: '[KNOCK ON DOOR] Watch me.',
    answer3:
      "[DE-ESCALATE] Hold on, dear mister! I did not mean any offense, all I wanted is for you to join me in killing the mayoress. Nothing more, nothing less. Killing her makes for one less person to knock on your door. Sounds reasonable, doesn't it? Come, let's go and knock her out.",
    correct_answer: 'answer3',
  },
  {
    dialogue_id: 6,
    description_text:
      'Still bearing the burning fire of vengeance in your heart, you walk up to yet another house and decide to mix things up a little by smashing your head against the door instead of knocking with your fist. Why you do so does not matter to you, for you can not tell the reason for you doing so. Confused by our own thoughts written down in the description, you decide to question it no further and continue with your little game. The door gets answered by a woman in her twenties, roughly the same age as you.',
    question_text:
      'Are you alright? I know that there are people in this village that are not fond of people who knock on their doors, but smashing your head against it?... Anyway, why do I even bother? What do you want, head-smasher?',
    fail_text:
      "[VILLAGER] Ye, I'm sure I will. Wait for me until the time comes. I will give my head some smashing until than, following your examole, you know?",
    succeed_text:
      'Okay, okay. No need to take things too far. Here, have your right answer, I will log it in the database. Let us resume this little game of mine and speak of this 4th wall no more.',
    answer1:
      '[GO INSANE] HAHA! My dear lady, smashing it is not. Furthermore it is The Way of Maniae thou have bore witness! For it is through her, that the head and mind shall see stars and within these stars, a sea of dancing little lights, slowly snuffing out. Just as you will help me snuffing out the mayoress...',
    answer2:
      "[BREAK THE 4TH WALL] This doesn't make any sense. Why am I chosing a pre-scripted text if I am supposed to break the 4th wall? And why did my character smash his head against the door? You, the creator of this insanity, better log in a right answer for me, lest I open your code on GitHub and see what it's made of.",
    /* Hello to everyone who actually took a look at the code :-) I hope you are liking the game so far. It's been a tough journey at times and it taught me a lot about the management side of projects . You always work under a time constraint, be it at the bootcamp or for your job with deadlines. You need to prioritize, because you have many idead but only limited time. Thank you UpLeveled for teacbing us in a way that simulates a real work environment. */
    answer3:
      "[MANIPULATE WITH HIDDEN MESSAGE] YOU are in luck today. For you WILL receive words today that touch your sould down to the core and MAKE you wholesome again. [You clear your throat] Roses are red, violets are blue, if it's not for HER, than it's neither for you. If that wasn't a rhyme to DIE for, I don't know what is.",
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
