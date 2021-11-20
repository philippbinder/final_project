import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';

// props (und ihre verwendeten Elemente) müssen immer in TS/TSX genau aufgeschlüsselt werden!
// type Props kann ich irgdnwie nennen, Hauptsache es wird als value props zugewiesen
type Props = {
  singleDialogue: {
    id: number;
    villager_id: number;
    question_text: string;
    failed_text: string;
    succeed_text: string;
  };
  singleAnswer1fromAnswers1: {
    id: number;
    answer_id: number;
    answer_text: string;
  };
  singleAnswer2fromAnswers2: {
    id: number;
    answer_id: number;
    answer_text: string;
  };
  singleAnswer3fromAnswers3: {
    id: number;
    answer_id: number;
    answer_text: string;
  };
};

export default function ProdcutTemplate(props: Props) {
  // const image = props.singleItem.image;
  // console.log(image);
  console.log('props.singleDialogue:', props.singleDialogue);
  return (
    <div>
      {/* gibt es singleDIalogue und falls es das in props gibt, dann stelle folgenden Code dar. Verhindert, dass er versucht props dartzustellen, wenn es props noch nicht gibt. Props gibt es immer, aber singleDialogue gibt es noch nicht in props*/}
      <h1> Test </h1>
      {'singleDialogue' in props && (
        <p> Question is: {props.singleDialogue.question_text} </p>
      )}

      {'singleAnswer1fromAnswers1' in props && (
        <p>Answer 1 is: {props.singleAnswer1fromAnswers1.answer_text}</p>
      )}

      {'singleAnswer2fromAnswers2' in props && (
        <p>Answer 2 is: {props.singleAnswer2fromAnswers2.answer_text}</p>
      )}

      {'singleAnswer3fromAnswers3' in props && (
        <p>Answer 3 is: {props.singleAnswer3fromAnswers3.answer_text}</p>
      )}
    </div>
  );
}
// Haut die querry hin, aber es kann dennoch nicht dargestellt werden -> debuggen und die einzelnen Elemente durchgehen (mit typeof)
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getDialogue } = await import('../../util/database');
  const { getAnswers1 } = await import('../../util/database');
  const { getAnswers2 } = await import('../../util/database');
  const { getAnswers3 } = await import('../../util/database');

  const dialogueList = await getDialogue();
  // console.log('dialogueList', dialogueList);
  const answers1List = await getAnswers1();
  // console.log('answers1List:', answers1List);
  const answers2List = await getAnswers2();
  const answers3List = await getAnswers3();
  console.log('answers2List:', answers2List);

  const idFromUrl = context.query.dialogueId;
  console.log('idFromUrl:', idFromUrl);

  // console.log(typeof idFromUrl); // string
  // // console.log(typeof dialogueList);
  // console.log(typeof dialogueList[0].villager_id); // number

  const singleDialogue = dialogueList.find((singleDialogueItem) => {
    return Number(idFromUrl) === singleDialogueItem.id;
  });
  const singleAnswer1fromAnswers1 = answers1List.find((singleAnswer) => {
    return Number(idFromUrl) === singleAnswer.id;
  });
  const singleAnswer2fromAnswers2 = answers2List.find((singleAnswer) => {
    return Number(idFromUrl) === singleAnswer.id;
  });
  const singleAnswer3fromAnswers3 = answers3List.find((singleAnswer) => {
    return Number(idFromUrl) === singleAnswer.id;
  });

  // heißt: singleDialogue ist aus der dailogueList (die ALLE Dialoge beinhlatet) jener Dialog, dessen ID der id im table mit der idFromUrl Zahl übereinstimmt.
  // finde aus dem array dialogueList jenes Element, dessen id dieselbe Zahl hat wie die Zahl von idFromUrl
  // Number() transformiert string in number
  // .toString() macht number zu string
  // habe number mit string verglichen -> daher keine Übereinstimmung
  console.log('singleDialogue:', singleDialogue);
  // = undefined
  console.log(singleDialogue?.villager_id);
  // ? lässt TS den Fall ignorieren, dass es undefined sein kann
  // console.log(dialogueList[idFromUrl.])

  return {
    props: {
      singleDialogue: singleDialogue,
      singleAnswer1fromAnswers1: singleAnswer1fromAnswers1,
      singleAnswer2fromAnswers2: singleAnswer2fromAnswers2,
      singleAnswer3fromAnswers3: singleAnswer3fromAnswers3,
    },
  };
}

// function die Antwort in die database insertet based on the answer
// -> insert into create user dailaogue status function in der database kreieren und callen
// the onClick also calls a redirect to a new template page that displays the failed_text oder succeeded_text based on a boolean like if
// send back to village with redirect
// redirect to village page the insert function for the game state has been called
