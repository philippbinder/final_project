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
  // singleAnswer1fromAnswers1: {
  //   id: number;
  //   answer_id: number;
  //   answer_text: string;
  // };
  // singleAnswer2fromAnswers2: {
  //   id: number;
  //   answer_id: number;
  //   answer_text: string;
  // };
  // singleAnswer3fromAnswers3: {
  //   id: number;
  //   answer_id: number;
  //   answer_text: string;
  // };
  // GradientContainer = string;
};

// export type answer_id = number;
// type LetsGo = {
//   answer_id: number;
//   correct: boolean;
// };
// type letsGo = {
//   answer_id: number;
//   correct: boolean;
// };
// export type LetsGo = {
//   answer_id: number;
//   correct: boolean;
// };
// export type letsGo = {
//   answer_id: number;
//   correct: boolean;
// };

// type answer_id: number;

// type

export default function ProdcutTemplate(props: Props) {
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
      <div>
        {/* gibt es singleDIalogue und falls es das in props gibt, dann stelle folgenden Code dar. Verhindert, dass er versucht props dartzustellen, wenn es props noch nicht gibt. Props gibt es immer, aber singleDialogue gibt es noch nicht in props*/}
        {/* <h1> Test </h1> */}

        {'singleDialogue' in props && (
          <p> {props.singleDialogue.description_text} </p>
        )}

        {'singleDialogue' in props && (
          <p> Question is: {props.singleDialogue.question_text} </p>
        )}

        {/* {'singleDialogue' in props && (
        <button id={1} onClick={insertAnswer(this.id)}>
          {' '}
          Answer 1 is: {props.singleDialogue.answer1}
        </button>
      )} */}

        {'singleDialogue' in props && (
          <button id="answer3"> {props.singleDialogue.answer2}</button>

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
          <button id="answer3"> {props.singleDialogue.answer3}</button>
        )}
      </div>
    </GradientContainer>
  );
}
// Haut die querry hin, aber es kann dennoch nicht dargestellt werden -> debuggen und die einzelnen Elemente durchgehen (mit typeof)
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getDialogue } = await import('../../util/database');

  const dialogueList = await getDialogue();
  console.log('dialogueList = ', dialogueList);
  const idFromUrl = context.query.dialogueId;
  console.log('idFromUrl:', idFromUrl);
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

  // heißt: singleDialogue ist aus der dailogueList (die ALLE Dialoge beinhlatet) jener Dialog, dessen ID der id im table mit der idFromUrl Zahl übereinstimmt.
  // finde aus dem array dialogueList jenes Element, dessen id dieselbe Zahl hat wie die Zahl von idFromUrl
  // Number() transformiert string in number
  // .toString() macht number zu string
  // habe number mit string verglichen -> daher keine Übereinstimmung
  // console.log('singleDialogue:', singleDialogue);
  // = undefined
  // console.log(singleDialogue?.villager_id);
  // ? lässt TS den Fall ignorieren, dass es undefined sein kann
  // console.log(dialogueList[idFromUrl.])

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
