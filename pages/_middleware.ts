import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { deleteSessionByToken } from '../util/database';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(
    "Is the url of the current page 'logout'?",
    req.url === '/logout',
  ); // checks if the url of page I am at is logout
  if (req.url === '/logout') {
    const sessionToken = req.cookies.sessionTokenRegister;
    // delete session with the sesseion in the cookie

    // if a sessionToken exist, ergo if user loged in or registered, fetch the api route that deletes that token
    if (sessionToken) {
      // fetch API route called logout
      console.log('logout');
      await fetch('/api/logout', {
        method: 'POST',
        body: JSON.stringify({ token: sessionToken }),
      });
      // const parsedResponse = await response.json();
      let res = new NextResponse(null, {});

      // Let Next.js continue
      res = NextResponse.redirect('/');

      // set the cookie to be empty
      res.cookie('sessionTokenRegister', '', {
        maxAge: -1,
        path: '/',
      }); // const newCookie = parsedResponse.newCookie;

      // console.log('const response of _middleware.ts:', response);
      // await deleteSessionByToken(sessionToken);
      return res;
    }
    // redirect to home
    // return NextResponse.redirect('/');
  }
  return;
}
