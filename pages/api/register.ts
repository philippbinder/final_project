// data from ../register.tsx will be send to this API route

import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../util/auth';

export default function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      errors: [
        { message: 'Request does not contain account and/or password.' },
      ],
    });
  }
  console.log(req.body);
  const username = req.body.username;
  const passwordHash = hashPassword(req.body.password);
  res.send('Test'); // sends the respone back to the browser - it's what I get in the parsed JSON
}
