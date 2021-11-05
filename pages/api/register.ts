// data from ../register.tsx will be send to this API route

import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../util/auth';
import { insertUser, User } from '../../util/database';
import { Errors } from '../../util/types';

export type RegisterRequest = {
  username: string;
  password: string;
};
export type RegisterResponse = { errors: Errors } | { user: User };

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>, // responses are allways of the ReigsterResponse type -> Errors types
) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      errors: [
        {
          message: 'Request does not contain the account and/or the password.',
        },
      ],
    });
    return;
  }

  // console.log(req.body);
  const username = req.body.username;
  const passwordHash = await hashPassword(req.body.password);
  console.log(username);
  console.log(passwordHash);
  const user = await insertUser({
    username: username,
    passwordHash: passwordHash,
  });
  // insert user to database
  res.send({ user: user }); // sends the respone back to the browser - it's what I get in the parsed JSON
}
