import { NextApiRequest, NextApiResponse } from 'next';
import {
  endGame,
  getValidSessionByToken,
  insertAnswer,
} from '../../util/database';

// idFromUrlNumber: number;
export type RegisterRequest = {
  dialogueId: number;
  buttonId: string;
};

// export const response: string = 'status.correct_answer updated.';

// export type LoginResponse = { user: User };

export default async function markAnswerHandler(
  req: NextApiRequest, // is the thing that is coming from the user
  res: NextApiResponse, // is the response
) {
  console.log('API req.body =', req.body);
  console.log('API req.cookies =', req.cookies);
  console.log('API typeof req.boy.dialogueId:', typeof req.body.dialogueId); // is a number
  console.log('API typeof req.body.buttonId:', typeof req.body.buttonId); // is a string
  const sessionToken = req.cookies.sessionToken;
  const session = await getValidSessionByToken(sessionToken);
  console.log('API typeof session.userId:', typeof session?.userId); // is a number
  console.log('API session.userId =', session?.userId);

  await insertAnswer(req.body.buttonId, req.body.dialogueId, session.userId);

  await endGame(session.userId);

  res.status(200).json('status.correct_answer updated.');
  // res.send('status.correct_answer updated.');
  // don't need any data sent back
}
