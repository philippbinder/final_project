// data from ../register.tsx will be send to this API route

import { NextApiRequest, NextApiResponse } from 'next';

export default function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.body);
  res.send('Test'); // sends the respone back to the browser - it's what I get in the parsed JSON
}
