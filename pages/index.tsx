import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

// import { getValidSessionByToken } from '../util/database';

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 4fr 0.5fr 10fr 0.5fr;
  grid-template-rows: 1.5fr 1.5fr 7.5fr 1fr;
  /* grid-row-gap: 40px;
  grid-column-gap: 20px; */
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.5vw;
  font-family: MedievalSharp;
  /* background: linear-gradient(
    180deg,
    rgba(102, 0, 17, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  ); */
  background: linear-gradient(
    180deg,
    rgba(250, 127, 13, 0.3626) 0.01%,
    rgba(168, 84, 14, 0.74) 0.02%,
    rgba(147, 9, 0, 0.74) 16.4%,
    rgba(6, 0, 2, 0.9) 100%
  );
`;
// original helles orange rgba(202, 129, 20, 0.74) 0.02%,

const headingStyle = css`
  grid-column: 2/5;
  grid-row: 1/2;
  /* background: linear-gradient(
    rgba(139, 69, 19, 0.74) 12%,
    rgba(139, 69, 19, 0.74) 10%,
    rgba(36, 33, 36, 01) 100%
  ); */
  /* background-image: img src= '/images/sunset.png' alt= 'Sunset at cemetery'; */
  /* rgba(255, 255, 255, 0.74) 10%, */

  /* background-color: #242124; */
  /* background: linear-gradient(
    rgba(139, 69, 19, 0.8) 0%,
    rgba(139, 69, 19, 0.74) 1.05%,
    rgba(242, 243, 244, 0.8) 6%,
    rgba(250, 244, 225, 1) 15%
  ); */
  border-bottom: 3px solid black;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  box-shadow: 0 0 20px #ffffff, 0 0 8px #8b0000;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const sunsetStyle = css`
  grid-column: 2/5;
  grid-row: 1/2;
  background-image: url('/images/sunsetDeer4.png');
  /* background-size: 60vw 110px; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 3px solid black;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  box-shadow: 0 0 10px #8b0000;
  /* width: 100%;
  height: 100%; */
  /* object-fit: contain; */
  /* height: 100%; */
  /* width: 100%; */
`;

const welcomeStyle = css`
  /* grid-column: 2/3;'
  grid-row: 0/1;' */
  color: white;
  letter-spacing: 0.7vw;
  font-size: 26px;
  text-shadow: 0 0 5px #8b0000;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const titleStyle = css`
  /* grid-column: 2/3;
  grid-row: 1/2; */
  font-size: 42px;
  letter-spacing: 1vw;
  // Letters glow realy cool in white font color - concealed evil, fitting for gameplay?
  /* color: #242124; */
  // Letters look really evil in black font color OR basic black?
  /* font-weight: 550; */
  color: white;
  text-shadow: 0 0 10px #8b0000, 0 0 8px #b22222, 0 0 8px #8b4513,
    0 0 4px #8b4513;
  /* color: #242124;
  text-shadow: 0 0 10px #ffffff, 0 0 8px #ffffff, 0 0 8px #ffffff,
    0 0 4px #ffffff; */
  /* padding-left: 0vw;
  padding-right: 0vw; */
  /* text-shadow: 0 0 7px #8b0000, 0 0 5px #b22222, 0 0 3px #c32148,
    0 0 1px #cb4154; */
  /* text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; */
`;

const navStyle = css`
  grid-column: 1/3;
  grid-row: 3/4;
  /* background: linear-gradient(
    rgba(139, 69, 19, 0.8) 0%,
    rgba(139, 69, 19, 0.74) 1.05%,
    rgba(242, 243, 244, 0.8) 6%,
    rgba(250, 244, 225, 1) 15%
  ); */
  /* border: 3px solid black; */
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  /* box-shadow: 0 0 10px #8b0000; */
  /* background-color: #242124; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const navElementStyles = css`
  /* align-self: center;
  justify-content: center; */
  /* position: relative; */
  /* right: 100px; */
  font-family: MedievalSharp;
  font-size: 30px;
  letter-spacing: 0.2vw;
  /* padding-left: 2.8px; */
  /* height: 50px;
  width: 450px; */
  padding-left: 2.8px;
  padding-right: 2.8px;
  text-align: center;
  border: 3px solid #242124;
  background-color: rgba(250, 244, 225, 0.62);
  /* background-color: #faf4e1; */
  /* border-radius: 20px; */
  border-bottom-right-radius: 15px;
  /* border-bottom-left-radius: 10px; */
  border-top-right-radius: 20px;
  // horizntal-, vertical-shadow-position, blur, spread, color
  box-shadow: 5px -3px 4px 1.5px #242124;
  /* 0 0 1px #a52a2a,  */
  /* border-top-left-radius: 10px; */
  /* justify-self: center; */
  &:hover {
    /* color: #242124; */
    color: #171717;
    /* color: #ffffff; */
    text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      /* border: 2px solid black; */ 0 0 1px #8b4513;
    /* color: #a52a2a; */
    /* border-color: #8b4513; */
  }
`;

const imageStyle = css`
  grid-column: 4/5;
  grid-row: 3/4;
  box-shadow: 0 0 4px #8b0000, 0 0 10px #ffffff;
  background-color: #242124;
  text-shadow: 0 0 6px #a52a2a, 0 0 4px #b22222, 0 0 3px #a52a2a,
    0 0 1px #a52a2a;
  border-radius: 20px;
  margin: 0 70px;
  background-image: url('/images/villageImage3.png');
  /* background-size: 60vw 110px; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* background-color: linear-gradient(
    180deg,
    rgba(15, 14, 15, 0.3626) 0.01%,
    rgba(15, 14, 15, 0.74) 0.02%,
    rgba(15, 14, 15, 0.74) 16.4%,
    rgba(15, 14, 15, 0.9) 100%
  ); */
`;

export default function LandingPage() {
  // console.log(sunsetImage);
  return (
    <div css={mainContainer}>
      <div css={sunsetStyle} />
      <div css={headingStyle}>
        <div css={welcomeStyle}> Welcome to </div>
        <div css={titleStyle}>Dark Deeds</div>
      </div>
      <div css={navStyle}>
        <div css={navElementStyles}>
          {' '}
          <Link href="./register"> To Registration </Link>{' '}
        </div>
        <div css={navElementStyles}>
          {' '}
          <Link href="./login"> To Login </Link>{' '}
        </div>
        <div css={navElementStyles}>
          {' '}
          <Link href="./placeholder"> To My LinkedIn </Link>{' '}
        </div>
        <div css={navElementStyles}>
          {' '}
          <Link href="./placeholder"> To Artist Credits </Link>{' '}
        </div>
      </div>
      <div css={imageStyle} />
      {/* <div css={hosueStyle} /> */}
    </div>
  );
}

//     <Link href="/"> To Registration </Link>
//   </div>
//   <div css={toLoginStyles}>
//     <Link href="./login"> To Login </Link>
//   </div>
//   <div css={toMyLinkedInStyles}>
//     <Link href="./placeholder"> To my LinkedIn Profile </Link>
//   </div>
//   <div css={toArtistCreditStyles}>
//     <Link href="./placeholder"> To Artist Credits </Link>
//   </div>
// </nav>;

// add shadow / black trees to left and the right of the screen?
// darker orange, darke red?
// why is the image getting smaller the more I zoom in?

// does the same as in the login.tsx - redirects if the user is already logged in
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { getValidSessionByToken } = await import('../util/database');

//   const sessionToken = context.req.cookies.sessionTokenRegister;

//   const session = await getValidSessionByToken(sessionToken);

//   console.log(session);

//   if (session) {
//     // Redirect the user when they have a session
//     // token by returning an object with the `redirect` prop
//     // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
//     return {
//       redirect: {
//         destination: '/village',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }
