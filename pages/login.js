import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  position: absolute;
  width: 100vw;
  height: 24.7%; // = 253/1% of 1024, the total height in px
  left: 0px;
  top: 0px;
  border-radius: [object Object]px;
  background: linear-gradient(
    180deg,
    rgba(139, 69, 19, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  );
`;

const bigContainerStyle = css`
  height: 100vh;
  width: 100vw;
  display: grid;
  /* grid-row-gap: 4vh; */
  /* grid-column-gap: 10vw; */
  /* grid-template-columns: 40%, 20%, 40%; */
  /* grid-template-columns: 10%, 30%, 20%, 30%, 10%; */
  grid-template-columns: 1fr 3fr 0.5fr 3fr 1fr;
  /* grid-template-columns: 10vw, 30vw, 20vw, 30vw, 10vw; */
  /* grid-template-rows: 20%, 15%, 65%; */
  /* grid-template-rows: 5%, 10%, 5%, 10%, 10%, 50%, 10%; */
  grid-template-rows: 0.5fr 1fr 0.5fr 1fr 1fr 5fr 1fr;
  row-gap: 2vh;
  /* grid-template-rows: 1fr, 0.5fr, 1fr, 0.5fr, 5fr; */
  /* grid-template-rows: auto; */
  /* grid-template-areas:
    '. heading heading heading .'
    '. . . . .'
    '. login . account .'
    '. . . . .'
    '. image image image .'; */
  /* align-items: stretch; */
  /* justify-items: stretch; */
  border: 3px solid red;
  /* justify-items: stretch;
  justify-content: stretch;
  align-items: stretch;
  align-content: stretch; */
`;

const headingStyle = css`
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  border-radius: nullpx;
  font-family: MedievalSharp;
  font-size: 5vh;
  font-style: normal;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;
  letter-spacing: 0.5vw;
`;

const loginButton = css`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-left: 14vw;
  border-radius: 20px;
  border: 3px solid brown;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vh;
  font-style: normal;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: center;
  font-family: MedievalSharp;
  letter-spacing: 0.5vw;
`;

const createAccountButton = css`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 3px solid brown;
  margin-right: 14vw;
  border-radius: 20px;
  font-size: 4vh;
  font-style: normal;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: center;
  font-family: MedievalSharp;
  letter-spacing: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* line-height: 1vh; */
`;

const imageContainer = css`
  /* width: 100%;
  height: 100%; */
  /* grid-area: image; */
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 8;
  border-radius: 20px;
  background-color: blue;
`;

export default function LandingPage() {
  return (
    <header css={headerStyles}>
      <div css={bigContainerStyle}>
        {/* <div css={whiteSpaceLeft} /> */}
        <div css={headingStyle}>LOG IN !!! GOD WILLS IT!</div>
        <div css={loginButton}>Log in</div>
        {/* <div css={whiteSpaceMiddle} /> */}
        <div css={createAccountButton}> Register </div>
        <div css={imageContainer} />
        {/* <div css={whiteSpaceRight} /> */}
      </div>
    </header>
  );
}
