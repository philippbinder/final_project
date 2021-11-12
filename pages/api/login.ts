// data from ../login.tsx will be send to this API route

import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../util/auth';
import { insertUser, User } from '../../util/database';
import { Errors } from '../../util/types';

export type LoginRequest = {
  username: string;
  password: string;
};
export type LoginResponse = { errors: Errors } | { user: User };

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>, // responses are allways of the ReigsterResponse type -> Errors types
) {
  console.log(req.body.username); // what is req body

  // checks if there are username and password
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
  try {
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
  } catch (err) {
    res.status(500).send({ errors: [{ message: (err as Error).message }] });
    // Security problem! This message displays on the page to the user how my database is structured => use a querry to check if such an error message exists and send a more secure and more understandable message to the user
    // 500 means internal server error - something went wrong when it tried to do something
  }
}
