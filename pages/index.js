import { css } from '@emotion/react';

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 4fr 1fr;
  /* grid-row-gap: 40px;
  grid-column-gap: 20px; */
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.5vw;
  font-family: MedievalSharp;
  background: linear-gradient(
    180deg,
    rgba(139, 69, 19, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  );
`;

const headingStyle = css`
  grid-column: 2/3;
  grid-row: 1/2;
  background-color: black;
  /* background: linear-gradient(
    rgba(139, 69, 19, 0.8) 0%,
    rgba(139, 69, 19, 0.74) 1.05%,
    rgba(242, 243, 244, 0.8) 6%,
    rgba(250, 244, 225, 1) 15%
  ); */
  border-bottom: 3px solid black;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  box-shadow: 0 0 10px #8b0000;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const welcomeStyle = css`
  /* grid-column: 2/3;'
  grid-row: 0/1;' */
  color: white;
  font-size: 30px;
  text-shadow: 0 0 5px #8b0000;
`;

const titleStyle = css`
  /* grid-column: 2/3;
  grid-row: 1/2; */
  font-size: 42px;
  letter-spacing: 1vw;
  /* color: #ffffff; */
  // Letters glow realy cool in white font color - concealed evil, fitting for gameplay?
  color: #242124;
  // Letters look really evil in black font color OR basic black?
  font-weight: 550;
  text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
    0 0 1px #8b4513;
  /* text-shadow: 0 0 7px #8b0000, 0 0 5px #b22222, 0 0 3px #c32148,
    0 0 1px #cb4154; */
  /* text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; */
`;

const navStyle = css`
  grid-column: 1/2;
  grid-row: 4/5;
  /* background: linear-gradient(
    rgba(139, 69, 19, 0.8) 0%,
    rgba(139, 69, 19, 0.74) 1.05%,
    rgba(242, 243, 244, 0.8) 6%,
    rgba(250, 244, 225, 1) 15%
  ); */
  border: 3px solid black;
  border-top-right-radius: 130px;
  border-bottom-right-radius: 130px;
  /* box-shadow: 0 0 10px #8b0000; */
  display: flex;
  flex-direction: column;
`;

const imageStyle = css`
  grid-column: 2/3;
  grid-row: 4/5;
  background-color: black;
  color: white;
  border-radius: 20px;
  font-size: 40px;
`;

export default function LandingPage() {
  return (
    <div css={mainContainer}>
      <div css={headingStyle}>
        <div css={welcomeStyle}> Welcome to </div>
        <div css={titleStyle}> Dark Deeds </div>
      </div>
      <div css={navStyle}></div>
      <div css={imageStyle}> Add pixel image from database </div>
    </div>
  );
}
