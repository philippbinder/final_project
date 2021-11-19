import { css } from '@emotion/react';
import Link from 'next/link';

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

  background: linear-gradient(
    180deg,
    rgba(250, 127, 13, 0.3626) 0.01%,
    rgba(168, 84, 14, 0.74) 0.02%,
    rgba(147, 9, 0, 0.74) 16.4%,
    rgba(6, 0, 2, 0.9) 100%
  );
`;
const headingStyle = css`
  grid-column: 2/5;
  grid-row: 1/2;

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
`;

const navStyle = css`
  grid-column: 1/4;
  grid-row: 3/4;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
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
      0 0 1px #8b4513;
  }
`;

const titleStyle = css`
  /* grid-column: 2/3;
  grid-row: 1/2; */
  padding-top: 20px;
  font-size: 42px;
  letter-spacing: 1vw;
  color: white;
  text-shadow: 0 0 10px #8b0000, 0 0 8px #b22222, 0 0 8px #8b4513,
    0 0 4px #8b4513;
`;

const imageStyle = css`
  grid-column: 4/5;
  grid-row: 3/4;
  box-shadow: 0 0 4px #8b0000, 0 0 10px #ffffff;
  background-color: #242124;
  color: white;
  font-size: 30px;
  display: flex;
  align-content: flex-start;
  text-shadow: 0 0 6px #a52a2a, 0 0 4px #b22222, 0 0 3px #a52a2a,
    0 0 1px #a52a2a;
  border-radius: 20px;
  margin: 0 70px;
  /* background-size: 60vw 110px; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function LandingPage() {
  // console.log(sunsetImage);
  return (
    <div css={mainContainer}>
      <div css={sunsetStyle} />
      <div css={headingStyle}>
        <div css={titleStyle}> Artist Credits </div>
      </div>
      <div css={navStyle}>
        <div css={navElementStyles}>
          <Link href="/"> To Home </Link>
        </div>
      </div>
      <div css={imageStyle}>
        <ul>
          <li>
            <Link href="https://opengameart.org/content/lpc-medieval-village-decorations">
              Village / villageImage3.png : opengameart.org
            </Link>{' '}
            <br />
            <Link href="creditsSource\CREDITS-decorations-medieval.txt">
              Credits file included in application as requested on
              opengameart.org.
            </Link>
          </li>
          <br />
          <li>
            <Link href="https://pixabay.com/illustrations/sunset-forest-sun-deer-afterglow-4797034/">
              Forest with sunset and deer: pixabay.com / sunsetDeer4.png
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
