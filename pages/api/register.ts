// data from ../register.tsx will be send to this API route

import crypto from 'node:crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../util/auth';
import { createSerializedRegisterSessionTokenCookie } from '../../util/cookies';
import {
  createSession,
  deleteExpiredSessions,
  getSingleUserWithPasswordHashByUsername,
  insertUser,
  User,
} from '../../util/database';
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
  console.log(req.body.username); // what is req body

  // checks if there are username and password
  // redundant since I check for a minlength of the username and the password
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

  // checks minimumlength for password
  if (req.body.password.length < 6) {
    res.status(400).send({
      errors: [
        {
          message: 'Password must be at least 6 characters long.',
        },
      ],
    });
    return;
  }

  // checks minimumlength for username
  if (req.body.username.length < 4) {
    res.status(400).send({
      errors: [
        {
          message: 'Username must be at least 4 characters long.',
        },
      ],
    });
    return;
  }
  // console.log(req.body);
  try {
    const username = req.body.username;

    // Adds response if the username is already taken
    const existingUser = await getSingleUserWithPasswordHashByUsername(
      username,
    );

    // BUGGED! Message not displayed, econnect refused
    if (existingUser) {
      res.status(400).send({
        errors: [{ message: 'Username already exists.' }],
      });
      return;
    }

    const passwordHash = await hashPassword(req.body.password);

    console.log(username);
    console.log(passwordHash);

    const user = await insertUser({
      username: username,
      passwordHash: passwordHash,
    });

    // clean old session
    deleteExpiredSessions();

    //  1. Creates the token for the session
    const token = crypto.randomBytes(64).toString('base64');

    console.log('Session token from login:', token); // console.log happens in the API -> visible in the terminal, not the console of the browser

    // 2. Does a DB query to add the session record
    // We set the token attached to the userId inside of the session table
    const newSession = await createSession(token, user.id);

    console.log('New session:', newSession);

    // 3. Set the response to create the cookie in the browser
    // Based on the token we create a serialized cookie
    const cookie = createSerializedRegisterSessionTokenCookie(newSession.token);

    // res.send({ user: user }); // sends the respone back to the browser - it's what I get in the parsed JSON
    res.status(200).setHeader('set-Cookie', cookie).send({ user: user });
  } catch (err) {
    res.status(500).send({ errors: [{ message: (err as Error).message }] });
    // Security problem! This message displays on the page to the user how my database is structured => use a querry to check if such an error message exists and send a more secure and more understandable message to the user
    // 500 means internal server error - something went wrong when it tried to do something
  }
}
