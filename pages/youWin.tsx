import { css } from '@emotion/react';
import YouWinLayout from '../components/YouWinLayout';

const youWinStyle = css`
  padding-top: 6px;
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
  padding-top: 28px;
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

export default function YouWin() {
  return (
    <YouWinLayout>
      {/* <div css={textContainer}> */}
      <div css={youWinStyle}> YOU WIN </div>
      <div css={text1Style}>
        At sundown, you rally the mob. They lust for blood and their mouths
        foam. You really do know how to decieve and bring out the worst in
        people. The villagers follow your command with zealousness and the power
        you hold in your hands fills your heart with pleasure you thought lost
        to the ages.{' '}
      </div>
      <div css={text2Style}>
        Once your pack of blood-hungry creatures arrive at the mayoress house,
        it all goes quickly. They storm her house, drag her out of it and bring
        her life to an end. As you relish in your vengance, a silent chill
        settles in the village as the winds start blowing.{' '}
      </div>
      {/* </div> */}
    </YouWinLayout>
  );
}
