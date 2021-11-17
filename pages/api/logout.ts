// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { NextApiRequest, NextApiResponse } from 'next';

import { createSerializedRegisterSessionTokenCookie } from '../../util/cookies';
import { deleteSessionByToken } from '../../util/database';

// https://www.youtube.com/watch?v=PxKUl7-tVEE&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=73

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method === 'POST') {
//     const { token } = JSON.parse(req.body);

//     // delete the session
//     if (token) {
//       await deleteSessionByToken(token);

//       return res.status(200).end();
//     }
//   }

//   return res.status(405);
// }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // console.log('in logout');
    // console.log(JSON.parse(req.body));

    // JSON.parse is important for making the JSON data "readable" again
    const { token } = JSON.parse(req.body);

    // delete the session
    if (token) {
      // if (token) {
      //   await deleteSessionByToken(token);
      //   return res.status(200).json(users);
      const session = await deleteSessionByToken(token);

      //  the create a user serialized empty cookie
      const cookie = createSerializedRegisterSessionTokenCookie('');

      return res.status(200).json({ session: session, newCookie: cookie });
    }
  }
  return res.status(405);
}
