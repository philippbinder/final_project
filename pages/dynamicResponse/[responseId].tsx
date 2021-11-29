import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

type Props = {
  singleDialogue: {
    id: number;
    villager_id: number;
    question_text: string;
    failed_text: string;
    succeed_text: string;
    answer1: string;
    answer2: string;
    answer3: string;
    correct_answer: string;
  };
};

export default function ResponseTemplate(props: Props) {
  // const router = useRouter(); // under useRouter and router.push https://nextjs.org/docs/api-reference/next/router
  // const handleOnClick = router.push('/village');
  console.log('props.singleDialogue:', props.singleDialogue);
  return (
    // <GradientContainer>
    <div>
      <h1> Test </h1>
      {'singleDialogue' in props && (
        <p> Response is: {props.singleDialogue.succeed_text} </p>
      )}
      {'singleDialogue' in props && (
        <p> Response is: {props.singleDialogue.failed_text} </p>
      )}
      {/* <button onClick={handleOnClick}>Back to village</button>) */}
    </div>
    // </GradientContainer>
  );
}
// Haut die querry hin, aber es kann dennoch nicht dargestellt werden -> debuggen und die einzelnen Elemente durchgehen (mit typeof)
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getDialogue } = await import('../../util/database');

  const dialogueList = await getDialogue();

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
