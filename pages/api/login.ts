// data from ../login.tsx will be send to this API route

import { NextApiRequest, NextApiResponse } from 'next';
import { verifyPassword } from '../../util/auth';
import {
  getSingleUserWithPasswordHashByUsername,
  User,
} from '../../util/database';
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
    const userFromDatabaseWithPasswordHash =
      await getSingleUserWithPasswordHashByUsername(username);

    if (!userFromDatabaseWithPasswordHash) {
      res.status(401).send({
        errors: [
          {
            message: 'Username or password is incorrect.',
          },
        ],
      });
      return;
    }

    const isPasswordVerified = verifyPassword(
      req.body.password,
      userFromDatabaseWithPasswordHash.passwordHash,
    );
    // req.body.password is the password from the login.tsx file that the user passes into the input field

    if (!isPasswordVerified) {
      res.status(401).send({
        errors: [
          {
            message: 'Username or password is incorrect.',
          },
        ],
      });
      return;
    }

    // takes the userFromDatabaseWithPasswordHash and removes the passwrodHash and stores the rest into a variable called user
    // reason is that we dont want to transmit the passwordHash back to the user
    const { passwordHash, ...user } = userFromDatabaseWithPasswordHash;

    res.send({ user: user }); // sends the respone back to the browser - it's what I get in the parsed JSON
  } catch (err) {
    res.status(500).send({ errors: [{ message: (err as Error).message }] });
    // Security problem! This message displays on the page to the user how my database is structured => use a querry to check if such an error message exists and send a more secure and more understandable message to the user
    // 500 means internal server error - something went wrong when it tried to do something
  }
}

// BUG!!!! if (!isPasswordVerified) always falsy => Password for existing user ALLWAYS checks as true
// https://www.youtube.com/watch?v=RUipFvAI72M&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=71 42:50
