import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import GradientContainer from '../../components/GradientContainer';

// WHY does GradientContainer kill the buttons???????????????

// import { insertAnswer1 } from '../../util/database';
// props (und ihre verwendeten Elemente) müssen immer in TS/TSX genau aufgeschlüsselt werden!
// type Props kann ich irgdnwie nennen, Hauptsache es wird als value props zugewiesen

// type GradientContainer = string;
type Props = {
  singleDialogue: {
    id: number;
    dialogue_id: number;
    description_text: string;
    question_text: string;
    failed_text: string;
    succeed_text: string;
    answer1: string;
    answer2: string;
    answer3: string;
    correct_answer: string;
  };
};

const textStyling = css`
  padding: 0 3px 0 3px;
  border-radius: 10px;
  background-color: silver;
  border: 2.5px solid black;
  box-shadow: 0 0 10px #ffffff, 0 0 18px #8b0000;
`;

const buttonStyling = css`
  margin-top: 40px;
  border: 2.5px solid black;
  border-radius: 10px;
  font-size: 16px;
  position: relative;
  text-align: left;
  box-shadow: 0 0 10px #8b0000, 0 0 6px #ffffff;
  background-color: silver;
  &:hover {
    /* color: #242124; */
    color: #171717;
    /* color: #ffffff; */
    text-shadow: 0 0 4px #8b0000, 0 0 2px #b22222, 0 0 2px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

export default function ProdcutTemplate(props: Props) {
  const clickHanlder = await fetch('/api/markAnswer');
  // async function insertAnswer(id: string) {
  //   if (id === props.singleDialogue.correct_answer) {
  //     await sql`
  //     -- INSERT INTO status
  //     UPDATE status
  //     SET
  //       correct_answer = true
  //     WHERE
  //       status.dialogue_id = props.singleDialogue.dialogue_id AND status.user_id = session.userId
  //       `;
  //   } else {
  //     await sql`
  //     UPDATE status
  //     SET
  //       correct_answer = false
  //     WHERE
  //       status.dialogue_id = props.singleDialogue.dialogue_id AND status.user_id = session.userId
  //   `;
  //   }
  // }

  // const letsGo = await insertAnswer1({
  //   answer_id: answer_id,
  //   correct: correct,
  // });
  // const image = props.singleItem.image;
  // console.log(image);
  console.log('props.singleDialogue:', props.singleDialogue);
  return (
    <GradientContainer>
      {/* // FETCHES API AND PASSES DATA

      const registerResponse = await fetch('/api/markAnswer', {
        method: 'POST', // weil ich Information senden will und etwas neues kreieren möchte / http methods - POST is to create, GET is to get some information, PUT is to update some information and DELETE is to delete information
        headers: {
          'Content-Type': 'application/json', // tells the program that I am sending JSON data
        },
        body: JSON.stringify({
          // body needs to be send in JSON
          // die data die ich passen will, also an register.ts, schreibe ich den body - "this body inside the fetch turns into req.body in reigsterHandler von register.ts"
          username: username,
          password: password,
        }),
      });
      console.log(registerResponse);

      const registerJson = (await registerResponse.json()) as RegisterResponse;

      // FETCHES API AND PASSES DATA */}
      <form>
        {/* gibt es singleDIalogue und falls es das in props gibt, dann stelle folgenden Code dar. Verhindert, dass er versucht props dartzustellen, wenn es props noch nicht gibt. Props gibt es immer, aber singleDialogue gibt es noch nicht in props*/}
        {/* <h1> Test </h1> */}

        {'singleDialogue' in props && (
          <p css={textStyling}> {props.singleDialogue.description_text}</p>
        )}

        {'singleDialogue' in props && (
          <p css={textStyling}>
            {' '}
            Villager: "{props.singleDialogue.question_text}"{' '}
          </p>
        )}

        {'singleDialogue' in props && (
          <button
            id="answer1"
            css={buttonStyling}
            onClick={() => {
              const test = await fetch('/api/markAnswer');
            }}
          >
            {' '}
            {props.singleDialogue.answer1}
          </button>
        )}

        {'singleDialogue' in props && (
          <button id="answer2" css={buttonStyling}>
            {' '}
            {props.singleDialogue.answer2}
          </button>

          // <form
          //   id="answer2"
          //   onSubmit={async (event) => {
          //     event.preventDefault();
          //     await fetch('/api/markAnswer'),
          //       {
          //         method: 'POST', // or PUT? Ppost to is to create something new,PUT is to update some informatiom
          //         header: {
          //           'Content-Type': 'application/json',
          //         },
          //         body: JOSN.stringify,({
          //           props.singleDialogue.answer2.correct_answer: props.singleDialogue.answer2.correct_answer,
          //         })
          //       };
          //   }}
          // >
          //   {props.singleDialogue.answer2}
          // </form>
        )}

        {'singleDialogue' in props && (
          <button id="answer3" css={buttonStyling}>
            {' '}
            {props.singleDialogue.answer3}
          </button>
        )}
      </form>
    </GradientContainer>
  );
}
// Haut die querry hin, aber es kann dennoch nicht dargestellt werden -> debuggen und die einzelnen Elemente durchgehen (mit typeof)
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getDialogue } = await import('../../util/database');
  const { getOneDialogue } = await import('../../util/database');

  const dialogueList = await getDialogue();
  // console.log('dialogueList = ', dialogueList);
  const idFromUrl = context.query.dialogueId; // is a string
  const idFromUrlNumber = Number(idFromUrl); // is a number
  // holt die function um die Session zu kriegen aus der db
  const { getValidSessionByToken } = await import('../../util/database');
  // holt den sessionToken der namentlich als sessionToken in util/cookies.js deklariert ist. req weil er auf der Serverside gespeichert ist
  const sessionToken = context.req.cookies.sessionToken;
  // passed den sessionToken in die function die die Session holt; sessionToken notwendig, weil die function sonst abricht und nur undefined returned
  const session = await getValidSessionByToken(sessionToken);

  console.log('session?.userId:', session?.userId);
  // ? bei session weil sonst TS wieder stresst.
  // userId statt user_id da camelCaseKeys in getValidSessionByToken function und der type auch userId in der db exportiert
  if (!session) {
    // Redirect the user to the landing page if they have a session
    // token by returning an object with the `redirect` prop
    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // console.log(typeof idFromUrl); // string
  // // console.log(typeof dialogueList);
  // console.log(typeof dialogueList[0].villager_id); // number

  const singleDialogue = dialogueList.find((singleDialogueItem) => {
    return Number(idFromUrl) === singleDialogueItem.id;
  });
  console.log('singleDialogue:', singleDialogue);

  const oneDialogue = await getOneDialogue(idFromUrlNumber); // is an array of one object
  // console.log('oneDialogue:', oneDialogue);
  console.log('oneDialogueOnlyObject:', oneDialogue[0]); // is an object

  return {
    props: {
      singleDialogue: singleDialogue,
    },
  };
}

// function die Antwort in die database insertet based on the answer
// -> insert into create user dailaogue status function in der database kreieren und callen
// the onClick also calls a redirect to a new template page that displays the failed_text oder succeeded_text based on a boolean like if
// send back to village with redirect
// redirect to village page the insert function for the game state has been called
