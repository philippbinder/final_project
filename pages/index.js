import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  /* height: 253px;
  width: 1440px; */
  // Use vh/vw instead of %?
  /* display: flex; */
  position: absolute;
  width: 100vw;
  height: 24.7%; // = 253/1% of 1024, the total height in px
  left: 0px;
  top: 0px;
  border-radius: [object Object]px;
  /* display: grid;
  grid-row-gap: 4vh;
  grid-column-gap: 10vw;
  grid-template-columns: 1fr, 1fr; */
  /* display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center;
  border: 3px solid red; */
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
  grid-template-columns: 1fr, 3fr, 1fr, 3fr, 1fr;
  /* grid-template-columns: 10vw, 30vw, 20vw, 30vw, 10vw; */
  /* grid-template-rows: 20%, 15%, 65%; */
  /* grid-template-rows: 5%, 10%, 5%, 10%, 10%, 50%, 10%; */
  grid-template-rows: 0.5fr, 1fr, 0.5fr, 1fr, 1fr, 5fr, 1fr;
  row-gap: 10vh;
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

bigContainerStyle.div = css``;

// const navStyle = css`
//   /* box-sizing: border-box; */
//   display: flex;
//   flex-direction: column;
//   /* position: relative; */ // not relative, not absolute
//   position: absolute;
//   /* text-align: center; */
//   /* left: 150px; */
//   /* right: 150px; */
//   /* width: 1440px; */
//   width: 100%;
//   /* height: 24.7%; */
//   height: 20vh;
//   border: 3px solid red;
//   /* top: 20vh; */
// `;

const headingStyle = css`
  /* width: 1358px; */
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  /* grid-area: heading; */
  border-radius: nullpx;
  font-family: MedievalSharp; // Not working!
  /* font-size: 64px; */
  font-size: 4vh;
  font-style: normal;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;
  /* background-color: purple; */
`;

// const headingStyle = css`
//   position: fixed;
//   text-align: center;
//   height: 72px;
//   width: 100%;
//   /* width: 1358px; */
//   left: 41px;
//   top: 54px;
//   border-radius: nullpx;
//   font-family: MedievalSharp; // Not working!
//   /* font-size: 64px; */
//   font-size: 4vh;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 72px;
//   letter-spacing: 0em;
//   /* text-align: left; */
// `;

// const headingTitleStyle = css`
//   font-family: MedievalSharp;
//   font-size: 64px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 72px;
//   letter-spacing: 0em;
//   text-align: left;
// `;

// Functionality needs to be added!
// Container unnecessary?
// const loginContainer = css`
//   height: 80px;
//   width: 374px;
//   left: 320px;
//   top: 141px;
//   border-radius: 20px;
// `;

const loginButton = css`
  /* position: absolute; */
  /* grid-area: login; */
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  /* height: 80px;
  width: 374px; */
  /* height: 100%; */
  /* width: 100%; */
  margin-left: 6vw;
  margin-top: -6vh;
  padding-bottom: 0vh;
  /* left: 320px;
  top: 141px; */
  /* left: 20vw;
  top: 7vh; */
  border-radius: 20px;
  border: 3px solid green;
  /* background-color: darkred; */
  /* justify-self: end; */
  /* align-self: stretch; */
`;

const loginText = css`
  position: absolute;
  text-align: center;
  height: 54px;
  width: 130px;
  left: 451px;
  top: 154px;
  /* border-radius: nullpx; */
  font-family: MedievalSharp;
  /* font-size: 48px; */
  font-size: 4vh;
  font-style: normal;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
`;

const createAccountContainer = css`
  height: 80px;
  width: 374px;
  right: 320px;
  top: 142px;
  border-radius: 20px;
`;

const whiteSpaceMiddle = css`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: magenta;
`;

const createAccountButton = css`
  /* position: absolute; */
  /* grid-area: account; */
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 3px solid #000000;
  /* align-self: start; */
  margin-right: 6vw;
  /* height: 80px;
  width: 374px; */
  /* height: 100%;
  width: 100%; */
  /* left: 746px; */
  /* right: 320px; */
  /* top: 142px; */
  border-radius: 20px;
  /* background-color: green; */
`;

const createAccountText = css`
  position: absolute;
  height: 63px;
  width: 328px;
  left: 769px;
  top: 155px;
  /* border-radius: nullpx; */
  font-family: MedievalSharp;
  /* font-size: 48px; */
  font-size: 4vh;
  font-style: normal;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
`;

const imageContainer = css`
  /* width: 100%;
  height: 100%; */
  /* grid-area: image; */
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 10;
  background-color: blue;
`;

const whiteSpaceRight = css`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 8;
  /* background-color: yellow; */
`;

const whiteSpaceLeft = css`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 8;
  background-color: silver;
`;

export default function LandingPage() {
  return (
    <header css={headerStyles}>
      <div css={bigContainerStyle}>
        {/* <div css={whiteSpaceLeft} /> */}
        <div css={headingStyle}>
          {' '}
          The Friendly Medieval Neighborhood Simulator
        </div>
        <div css={loginButton} />
        <div css={whiteSpaceMiddle} />
        <div css={createAccountButton} />
        <div css={imageContainer} />
        <div css={whiteSpaceRight} />
      </div>
    </header>
  );
}

// export default function LandingPage() {
//   return (
//     <header css={headerStyles}>
//       {/* <nav css={navStyle}> */}
//       <div css={headingStyle}>
//         {' '}
//         The Friendly Medieval Neighborhood Simulator
//       </div>
//       {/* <div css={loginContainer}> */}
//       <div css={loginButton}> </div>
//       <div css={loginText}> Log in </div>
//       {/* </div> */}
//       <div css={createAccountContainer}>
//         <div css={createAccountButton}> </div>
//         <div css={createAccountText}> Create account </div>
//       </div>
//       {/* </nav> */}
//     </header>
//   );
// }
