import { serialize } from 'cookie';
import Cookies from 'js-cookie';

// create function to serialize the new session
// serialize is a function from the package cookie
// this function allows us to create the cookie from the serve
export function createSerializedRegisterSessionTokenCookie(token) {
  // Secrue Cookies have a specific way to behave, usualy only work under https. In Heroku we want our cookie to be protected.

  // Check if we are in production e.g. Heroku
  const isProduction = process.env.NODE_ENV === 'production';

  const maxAge = 60 * 5; // means 5 minutes

  // serialize recieves 3 arguments: sessionTokenRegister = name of the cookie, token = value of the cookie, {content} = is an object with all the options
  return serialize('sessionTokenRegister', token, {
    maxAge: maxAge,
    // we are also getting the expire because some browsers use maxeAge, some use expires
    expires: new Date(Date.now() + maxAge * 1000),
    // All the lines in the {} are important for security:
    httpOnly: true,
    // secure is true if we are in production, false if we are in development, in development we work in https, not http
    secure: isProduction,
    path: '/',
    sameSite: 'lax',
  });
}
