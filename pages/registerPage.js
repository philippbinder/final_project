import { css } from '@emotion/react';
import Link from 'next/link';

const mainContainer = css`
  position: absolute;
  width: 100vw;
  height: 24.7%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr;
  grid-row-gap: 5vh;
  text-align: center;
  letter-spacing: 0.5vw;

  /* justify-content: stretch; */
  /* align-content: stretch; */
  background: linear-gradient(
    180deg,
    rgba(139, 69, 19, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  );
  font-family: MedievalSharp;
  font-size: 5vh;
`;

const title = css`
  margin-top: 5vh;
  grid-column: 2/3;
  grid-row: 2/3;
  font-size: 6vh;
`;

const enterAccount = css`
  grid-column: 2/3;
  grid-row: 4/5;
`;

const enterPassword = css`
  grid-column: 2/3;
  grid-row: 6/7;
`;

const submit = css`
  grid-column: 2/3;
  grid-row: 8/9;
`;

const inquisition = css`
  grid-column: 2/3;
  grid-row: 10/11;
`;

export default function registerPage() {
  return (
    <div css={mainContainer}>
      <div css={title}> Registration </div>
      <div css={enterAccount}> enter Account </div>
      <div css={enterPassword}> enter Password </div>
      <div css={submit}> submit </div>
      <div css={inquisition}>
        {' '}
        The Inquisition appreciates your fervor and commitment!{' '}
      </div>
    </div>
  );
}
