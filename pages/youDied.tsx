import { css } from '@emotion/react';
import YouDiedLayout from '../components/YouDiedLayout';

// const textContainer = css`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

const youDiedStyle = css`
  padding-top: 36px;
  letter-spacing: 0.65vw;
  color: red;
  font-size: 72px;
  text-align: center;
  text-shadow: 0 0 18px #000000, 0 0 8px #000000, 0 0 8px #000000,
    /* border: 2px solid black; */ 0 0 8px #000000;
`;

const text1Style = css`
  padding-top: 72px;
  font-size: 24px;
  letter-spacing: 0.1vw;
  color: rgba(255, 255, 255, 0.99);
  /* color: #ff7b00; */
  text-shadow: 0 0 6px #000000, 0 0 5px #000000, 0 0 5px #000000,
    /* border: 2px solid black; */ 0 0 1px #000000;
  text-align: center;
`;

const text2Style = css`
  padding-top: 24px;
  font-size: 24px;
  letter-spacing: 0.1vw;
  color: rgba(255, 255, 255, 0.99);
  /* color: #ff7b00; */
  text-shadow: 0 0 6px #000000, 0 0 5px #000000, 0 0 5px #000000,
    /* border: 2px solid black; */ 0 0 1px #000000;
  /* color: rgba(255, 255, 255, 0.75);
  /* color: #ff7b00; */
  /* text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
   0 0 1px #8b4513; */
  text-align: center;
`;

export default function YouDied() {
  return (
    <YouDiedLayout>
      {/* <div css={textContainer}> */}
      <div css={youDiedStyle}> YOU DIED </div>
      <div css={text1Style}>
        You failed at your dilettantish attempt to rally up the villagers to
        kill their own mayoress, whom they have known for decades. Having grown
        tired of your idiotic annoyances, the village gather around you and put
        an end to you and your scheming.
      </div>
      <div css={text2Style}>
        In your last moments you look up to the night sky and see the mayoress
        riding a broom and flying through the air. As it turns out, she was a
        real witch after all. Who would have thought?
      </div>
      {/* </div> */}
    </YouDiedLayout>
  );
}
