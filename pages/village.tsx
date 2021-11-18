// export async function villageMap () {}

import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { getValidSessionByToken } from '../util/database';

const pageColor = css`
  position: absolute;
  /* width: 100vw; */
  height: 24.7%;
  background: linear-gradient(
    180deg,
    rgba(139, 69, 19, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  );
`;

const mainContainer = css`
  /* margin-top: 1vh; */
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 2.5fr 0.5fr;
  /* grid-template-rows: 0.5fr 1fr 0.5fr 6fr; */
  grid-template-rows: 1fr 0.5fr 6fr 0.5fr;
  height: 100vh;
  width: 100vw;
`;

const saveGameButton = css`
  grid-column: 2/3;
  /* grid-row: 2/3; */
  grid-row: 1/2;
  border: solid black;
  border-radius: 20px;
  /* text-decoration: underline; */
  align-self: center;
  justify-self: center;
  margin-left: 14vw;
  margin-top: 4.5vh;
  text-align: center;
  font-size: 4vh;
  font-family: MedievalSharp;
  letter-spacing: 0.5vw;
  padding-left: 0.5vw;
  &:hover {
    color: #faebd7;
    border-color: #faebd7;
  }
`;

const exitButton = css`
  grid-column: 3/4;
  /* grid-row: 2/3; */
  grid-row: 1/2;
  border: solid black;
  border-radius: 20px;
  align-self: center;
  justify-self: center;
  margin-right: 14vw;
  margin-top: 4.5vh;
  text-align: center;
  font-size: 4vh;
  font-family: MedievalSharp;
  letter-spacing: 0.5vw;
  padding-left: 0.5vw;
  /* text-decoration: underline; */
  &:hover {
    color: #faebd7;
    border-color: #faebd7;
  }
`;
const village = css`
  grid-column: 2/4;
  /* grid-row: 4/5; */
  grid-row: 3/4;
  background-color: blue;
  border: 3px solid black;
  border-radius: 30px;
`;
const leftDeco = css`
  grid-column: 1/2;
  /* grid-row: 1/5; */
  grid-row: 1/4;
  background-color: linear-gradient(
    180deg,
    rgba(139, 69, 19, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  );
`;

const rightDeco = css`
  grid-column: 4/5;
  /* grid-row: 1/5; */
  grid-row: 1/4;
  background-color: linear-gradient(
    180deg,
    rgba(139, 69, 19, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  );
`;

export default function villageMap() {
  // JS stuff
  return (
    <div css={pageColor}>
      <div css={mainContainer}>
        <div css={saveGameButton}> Save Game </div>
        <div css={exitButton}>
          <Link href="/"> Exit Game </Link>
        </div>
        <div css={leftDeco} />
        <div css={village} />
        <div css={rightDeco} />
      </div>
    </div>
  );
}

// makes this page only reachable if user / admin is logged in
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const sessionToken = context.req.cookies.sessionTokenRegister;
  const sessionToken = context.req.cookies.sessionToken;
  console.log('village.tsx context.req.cookies:', context.req.cookies);

  const session = await getValidSessionByToken(sessionToken);

  console.log(session);

  if (!session) {
    // Redirect the user when they have a session
    // token by returning an object with the `redirect` prop
    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
    return {
      redirect: {
        destination: '/?returnTo=/village',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
