import { NextApiRequest, NextApiResponse } from 'next';
import {
  endGame,
  getCurrentUserStatus,
  getValidSessionByToken,
  Status,
  updateUserState,
} from '../../util/database';

// idFromUrlNumber: number;
export type RegisterRequest = {
  dialogueId: number;
  buttonId: string;
};

export type NewStatus = {
  id: number;
  userId: number;
  dialogueId: number;
  answeredCorrectly: boolean;
};

// respond with the new status
// export type StatusResponse = { newStatus: NewStatus };
export type StatusResponse = { Status: Status };

// export type LoginResponse = { user: User };

export default async function markAnswerHandler(
  req: NextApiRequest, // is the thing that is coming from the user
  res: NextApiResponse<StatusResponse>, // is the response
) {
  console.log('API req.body =', req.body);
  console.log('API req.cookies =', req.cookies);
  console.log('API typeof req.boy.dialogueId:', typeof req.body.dialogueId); // is a number
  console.log('API typeof req.body.buttonId:', typeof req.body.buttonId); // is a string
  const sessionToken = req.cookies.sessionToken;
  const session = await getValidSessionByToken(sessionToken);
  console.log('API typeof session.userId:', typeof session?.userId); // is a number
  console.log('API session.userId =', session?.userId);

  // const updatedCurrentUserStatus = await updateCurrentUserStatus(
  //   session.userId,
  //   req.body.dialogueId,
  // );
  // console.log('updatedCurrentUserStatus=', updatedCurrentUserStatus);
  const newStatus = await updateUserState(
    req.body.buttonId,
    req.body.dialogueId,
    session.userId,
  );
  console.log('markAnswer updateUserState => newStatus =', newStatus);

  // should be the same as enwStatus since it's run after the udpate
  const currentUserStatus = await getCurrentUserStatus(session.userId);
  console.log('markAnswer.ts currentUserStatus=', currentUserStatus);
  // await endGame(session.userId);

  res.status(200).json('status.correct_answer updated.');
  // res.status(200).json({ newStatus: newStatus });
  // res.send('status.correct_answer updated.');
  // don't need any data sent back
}
