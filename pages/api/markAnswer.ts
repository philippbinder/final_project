import { NextApiRequest, NextApiResponse } from 'next';
import { getDialogue, insertAnswer } from '../../util/database';

export type RegisterRequest = {
  // idFromUrlNumber: number;
  dialogueId: number;
  buttonId: string;
  userId: number;
};

export default async function markAnswerHandler(
  req: NextApiRequest, // is the thing that is coming from the user
  res: NextApiResponse, // is the response
) {
  console.log('API req.body =', req.body);
  await insertAnswer(req.body.dialogueId, req.body.buttonId, req.body.userId);
  // const dialogueList = await getDialogue();
  // gets me the dialogue table as an array of objects
  // const singleDialogue = dialogueList.find((singleDialogueItem) => {
  // return Number(req.body.dialogueId) === singleDialogueItem.id;
  // out of said array select the object

  // get the buttonId from the body and the userId from the cookies / from the session?
  // then pass both into the function insertAnswer(buttonId, userId)
  //

  res.status(200).json('status.correect_answer updated.');
  // don't need any data sent back
}

// Reading - GET all dialogues
// Reading - GET single dialogue - dialogue_id with for the right user_id
// Updating - PUT
