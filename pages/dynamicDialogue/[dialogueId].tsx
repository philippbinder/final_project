import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import GradientContainer from '../../components/GradientContainer';

// import { RegisterResponse } from './api/markAnswer'; need no response from the API in the browser

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
  idFromUrlNumber: number;
  // idFromUrl: {};
  // let idFromUrlNumber: number = idFromUrlNumber;
};

// export const button1: string = 'answer1';

const textStyling = css`
  /* padding: 0 3px 0 3px; */
  /* border-radius: 10px; */
  /* background-color: silver; */
  /* border: 2.5px solid black; */
  /* box-shadow: 0 0 10px #ffffff, 0 0 18px #8b0000; */
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

const box1 = css`
  margin-top: 10px;
  padding: 0 3px 0 3px;
  border-radius: 10px;
  background-color: silver;
  border: 2.5px solid black;
  box-shadow: 0 0 10px #ffffff, 0 0 18px #8b0000;
`;

export default function DialogueTemplate(props: Props) {
  console.log('idFromUrlNumber', props.idFromUrlNumber);
  const button1 = 'answer1';
  console.log('API typeof button1 =', typeof button1);
  const button2 = 'answer2';
  const button3 = 'answer3';
  const router = useRouter(); // under useRouter and router.push https://nextjs.org/docs/api-reference/next/router

  return (
    <GradientContainer>
      {/* <form> */}
      {/* gibt es singleDIalogue und falls es das in props gibt, dann stelle folgenden Code dar. Verhindert, dass er versucht props dartzustellen, wenn es props noch nicht gibt. Props gibt es immer, aber singleDialogue gibt es noch nicht in props*/}
      {/* <h1> Test </h1> */}
      <div css={box1}>
        {'singleDialogue' in props && (
          <p css={textStyling}>
            {' '}
            Description: {props.singleDialogue.description_text}
          </p>
        )}

        {'singleDialogue' in props && (
          <p css={textStyling}>
            Villager: "{props.singleDialogue.question_text}"
          </p>
        )}
      </div>

      {'singleDialogue' in props && (
        <button
          css={buttonStyling}
          onClick={async () => {
            await fetch('/api/markAnswer', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                dialogueId: props.idFromUrlNumber,
                buttonId: button1,
              }),
            });
            router.push('/village');
          }}
        >
          {' '}
          {props.singleDialogue.answer1}
        </button>
      )}

      {'singleDialogue' in props && (
        <button
          css={buttonStyling}
          onClick={async () => {
            await fetch('/api/markAnswer', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                dialogueId: props.idFromUrlNumber,
                buttonId: button2,
              }),
            });
            router.push('/village');
          }}
        >
          {' '}
          {props.singleDialogue.answer2}
        </button>
      )}

      {'singleDialogue' in props && (
        <button
          css={buttonStyling}
          onClick={async () => {
            await fetch('/api/markAnswer', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                dialogueId: props.idFromUrlNumber,
                buttonId: button3,
              }),
            });
            router.push('/village');
          }}
        >
          {' '}
          {props.singleDialogue.answer3}
        </button>
      )}
      {/* </form> */}
    </GradientContainer>
  );
}
// Haut die querry hin, aber es kann dennoch nicht dargestellt werden -> debuggen und die einzelnen Elemente durchgehen (mit typeof)
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getDialogue } = await import('../../util/database');
  // const { getOneDialogue } = await import('../../util/database');

  const dialogueList = await getDialogue();
  // console.log('dialogueList = ', dialogueList);
  const idFromUrl = context.query.dialogueId; // is a string
  const idFromUrlNumber = Number(idFromUrl); // is a number
  console.log('idFromUrlNumber in gSSP:', idFromUrlNumber); // <--- good guy idFromUrlNumber

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
  // console.log('singleDialogue:', singleDialogue);

  // const oneDialogue = await getOneDialogue(idFromUrlNumber);
  // is an array of one object
  // console.log('oneDialogue:', oneDialogue);
  // console.log('oneDialogueOnlyObject:', oneDialogue[0]);
  // is an object

  return {
    props: {
      singleDialogue: singleDialogue,
      idFromUrlNumber: idFromUrlNumber,
    },
  };
}

// function die Antwort in die database insertet based on the answer
// -> insert into create user dailaogue status function in der database kreieren und callen
// the onClick also calls a redirect to a new template page that displays the failed_text oder succeeded_text based on a boolean like if
// send back to village with redirect
// redirect to village page the insert function for the game state has been called
