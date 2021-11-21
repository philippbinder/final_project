import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { getValidSessionByToken } from '../util/database';

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 10fr 0.5fr;
  grid-template-rows: 1.5fr 1fr 7.5fr 1fr;
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

const navStyle = css`
  grid-column: 1/4;
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
  justify-content: center;
  gap: 30px;
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
  /* background: linear-gradient(#f2f3f4 5%, #ffffff 50%); */

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

const imageContainer = css`
  grid-column: 4/5;
  grid-row: 3/4;
  /* margin-top: 10vh;
  margin-left: 10vw;
  margin-right: 10vw; */
  /* position: absolute;
  width: 60vw;
  height: 40vh;
  margin: 0 auto; */
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
`;

const villager1 = css`
  /* border: 2px solid #b3500e; */
  /* border: 2px solid #ffffff;
  border-radius: 50%;
  background: none;
  /* background-color: white; */
  color: rgba(250, 244, 225, 0.89);
  font-size: 4vh;
  position: absolute;
  /* width: 4vw; */
  margin-top: 41vh;
  margin-left: 32.8vw;
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  /* margin-left: -64%; */
  /* height: 4vw; */
  /* width: 5%;
  height: 5%; */
  /* width: 30px;
  height: 30px; */
`;
const villager2 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 45vh;
  margin-left: 49.9vw;
`;

const villager3 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 41.5vh;
  margin-left: 65.5vw;
`;

const villager4 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 40.5vh;
  margin-left: 81vw;
`;

const villager5 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 53vh;
  margin-left: 81.8vw;
`;

const villager6 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 66.5vh;
  margin-left: 42.15vw;
`;

const villager7 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 73.5vh;
  margin-left: 47.55vw;
`;

const villager8 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 61.5vh;
  margin-left: 53.85vw;
`;

const villager9 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 70vh;
  margin-left: 64.78vw;
`;

const villager10 = css`
  color: rgba(250, 244, 225, 0.89);
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513;
  font-size: 4vh;
  position: absolute;
  margin-top: 69.4vh;
  margin-left: 77.78vw;
`;

export default function VillagePage() {
  // console.log(sunsetImage)
  return (
    <div css={mainContainer}>
      <div css={sunsetStyle} />
      <div css={headingStyle} />
      <div css={navStyle}>
        <div css={navElementStyles}>X/Y answered.</div>
        <div css={navElementStyles}>
          <Link href="/logout"> Logout </Link>
        </div>
        <div css={navElementStyles}>
          <Link href="/placeholder">Lore?</Link>
        </div>
      </div>
      <div css={imageContainer} />
      <div css={villager1}>
        <Link href="/dynamicDialogue/1"> 1 </Link>
      </div>
      <div css={villager2}>
        <Link href="/dynamicDialogue/2"> 2 </Link>
      </div>
      <div css={villager3}>
        <Link href="/dynamicDialogue/3"> 3 </Link>
      </div>
      <div css={villager4}>
        <Link href="/dynamicDialogue/4"> 4 </Link>
      </div>
      <div css={villager5}>
        <Link href="/dynamicDialogue/5"> 5 </Link>
      </div>
      <div css={villager6}>
        <Link href="/dynamicDialogue/6"> 6 </Link>
      </div>
      <div css={villager7}>
        <Link href="/dynamicDialogue/7"> 7 </Link>
      </div>
      <div css={villager8}>
        <Link href="/dynamicDialogue/8"> 8 </Link>
      </div>
      <div css={villager9}>
        <Link href="/dynamicDialogue/9"> 9 </Link>
      </div>
      <div css={villager10}>
        <Link href="/dynamicDialogue/10"> 10 </Link>
      </div>
    </div>
    // <Link href={`/dialogueFolder/${props.dialogueList[0].villager_id}`}>
  );
}

// makes this page only reachable if user / admin is logged in
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const sessionToken = context.req.cookies.sessionTokenRegister;
  const sessionToken = context.req.cookies.sessionToken;
  // console.log('village.tsx context.req.cookies:', context.req.cookies);

  const session = await getValidSessionByToken(sessionToken);
  // console.log(session);

  if (!session) {
    // Redirect the user when they have a session
    // token by returning an object with the `redirect` prop
    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
    // next step: set 2 possible destinations: if !session is true: send the user to the landing page / if !session is false: send the user to the village page (stay on the opened page)
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
