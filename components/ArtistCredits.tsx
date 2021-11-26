import { css } from '@emotion/react';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
// neccessary for tsx

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  font-family: MedievalSharp;
  background: linear-gradient(
    180deg,
    rgba(250, 127, 13, 0.3626) 0.01%,
    rgba(168, 84, 14, 0.74) 0.02%,
    rgba(147, 9, 0, 0.74) 16.4%,
    rgba(6, 0, 2, 0.9) 100%
  );
  display: grid;
  grid-template-columns: 1fr 0.5fr 8fr 0.5fr 1fr;
  grid-template-rows: 0.2fr 8fr 1fr 0.2fr;
`;

const innerContainer = css`
  grid-column: 3/4;
  grid-row: 2/3;
  box-shadow: 0 0 4px black, 0 0 10px black;
  border: 1.5px solid black;
  border-radius: 60px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const navStyle = css`
  grid-column: 3/4;
  grid-row: 3/4;
  display: flex;
  margin-top: 10px;
  /* background-color: green; */
  justify-content: space-around;
  align-items: center;
`;

const navElementStyles = css`
  /* margin-top: 200px; */
  font-family: MedievalSharp;
  font-size: 30px;
  letter-spacing: 0.2vw;
  margin: 0, 10px, 0, 10px;
  padding-left: 2.8px;
  padding-right: 2.8px;
  text-align: center;
  border: 3px solid #242124;
  background-color: rgba(250, 244, 225, 0.82);
  /* background-color: white; */
  text-shadow: 0 0 6px #000000;
  border-radius: 20px;
  box-shadow: 5px -3px 4px 1.5px #242124;
  &:hover {
    color: rgba(23, 23, 23, 0.8);
    text-shadow: 0 0 4px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
      0 0 1px #8b4513;
    /* color: rgba(255, 0, 0, 0.6);
    text-shadow: 0 0 4px #000000, 0 0 9px #000000, 0 0 9px #000000,
      0 0 9px #000000; */
  }
`;

export default function ArtistCredits(props: Props) {
  return (
    <div css={mainContainer}>
      <div css={innerContainer}>{props.children}</div>
      <div css={navStyle}>
        <div css={navElementStyles}>
          <Link href="/logout"> Logout / Home </Link>
        </div>
        <div css={navElementStyles}>
          <Link href="/village"> To Village </Link>
        </div>
        <div css={navElementStyles}>
          <Link href="https://www.linkedin.com/in/philipp-binder-021916226/">
            My Linkedin
          </Link>
        </div>
      </div>
      {/* <div css={takeSpace} /> */}
      {/* <div css={navElementStyles}>
        <Link href="/logout"> Logout </Link>{' '}
      </div> */}
      {/* <div css={navElementStyles}>
        <Link href="./placeholder"> To My LinkedIn </Link>{' '}
      </div> */}
    </div>
  );
}
