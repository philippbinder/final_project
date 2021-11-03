import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  /* height: 253px;
  width: 1440px; */
  // Use vh/vw instead of %?
  /* display: flex; */
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

const navStyle = css`
  /* box-sizing: border-box; */
  /* display: flex; */
  /* position: relative; */ // not relative, not absolute
  left: 150px;
  right: 150px;
  width: 1440px;
  height: 24.7%;
  border: 3px solid red;
`;

const headingStyle = css`
  position: relative;
  height: 72px;
  width: 1358px;
  left: 41px;
  top: 54px;
  border-radius: nullpx;
  font-family: MedievalSharp; // Not working!
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: left;
`;

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
const loginContainer = css`
  height: 80px;
  width: 374px;
  left: 320px;
  top: 141px;
  border-radius: 20px;
`;

const loginButton = css`
  position: absolute;
  height: 80px;
  width: 374px;
  left: 320px;
  top: 141px;
  border-radius: 20px;
  border: 3px solid #000000;
`;

const loginText = css`
  position: absolute;
  height: 54px;
  width: 130px;
  left: 451px;
  top: 154px;
  /* border-radius: nullpx; */
  font-family: MedievalSharp;
  font-size: 48px;
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

const createAccountButton = css`
  position: absolute;
  border: 3px solid #000000;
  height: 80px;
  width: 374px;
  left: 746px;
  /* right: 320px; */
  top: 142px;
  border-radius: 20px;
`;

const createAccountText = css`
  position: absolute;
  height: 63px;
  width: 328px;
  left: 769px;
  top: 155px;
  /* border-radius: nullpx; */
  font-family: MedievalSharp;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
`;

export default function LandingPage() {
  return (
    <header css={headerStyles}>
      <nav css={navStyle}>
        <div css={headingStyle}>
          {' '}
          The Friendly Medieval Neighborhood Simulator
        </div>
        <div css={loginContainer}>
          <div css={loginButton}> </div>
          <div css={loginText}> Log in </div>
        </div>
        <div css={createAccountContainer}>
          <div css={createAccountButton}> </div>
          <div css={createAccountText}> Create account </div>
        </div>
      </nav>
    </header>
  );
}
