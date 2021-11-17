import { css } from '@emotion/react';

const imageStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url('/images/angrySmiley.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 6vh;
  text-align: center;
  line-height: 26vh;
  padding-top: 31.5vh;
  font-weight: 900;
  color: black;
  text-shadow: 0 0 10px #8b0000, 0 0 8px #b22222, 0 0 8px #8b4513,
    0 0 4px #ffffff;
`;

export default function Placeholder() {
  return (
    <div>
      <div css={imageStyle}>
        {' '}
        Yo! Watcha doing here? This is a P L A C E H O L D E R! <br /> Get it?
        (You ought to press Alt + Left Arrow ...){' '}
      </div>
    </div>
  );
}
