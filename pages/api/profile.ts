import { createSerializedRegisterSessionTokenCookie } from '../../util/cookies';
import { getUser, getValidSessionByToken, User } from '../../util/database';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// get user profile data
// ?  means that this can be undefined
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.cookies.sessionTokenRegister;

    const session = await getValidSessionByToken(token);
    // no session found -> error message
    if (!session) {
      res.status(401).send({
        errors: [
          {
            message: 'Not a valid session.',
          },
        ],
      });
      return;
    }

    const user = await getUser(session.userId);
    // no user found -> error message
    if (!user) {
      res.status(404).send({
        errors: [
          {
            message: 'User not found.',
          },
        ],
      });
      return;
    }
    // otherwise -> return user
    return res.status(200).send({ user: user });
  }
  return res.status(405);
}
