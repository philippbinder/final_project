import { css } from '@emotion/react';
import { ReactNode } from 'react';

// neccessary for tsx

type Props = {
  children: ReactNode;
};
// neccessary for tsx

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  /* grid-row-gap: 40px; */
  /* grid-column-gap: 20px; */
  /* text-align: center; */
  font-size: 21px;
  font-weight: 600;
  /* text-shadow: 0 0 6px #8b0000, 0 0 5px #b22222, 0 0 5px #8b4513,
    0 0 1px #8b4513; */
  letter-spacing: 0vw;
  font-family: MedievalSharp;
  /* background: linear-gradient(
    180deg,
    rgba(102, 0, 17, 0.74) 0%,
    rgba(139, 69, 19, 0.74) 0.01%,
    rgba(139, 69, 19, 0) 100%
  ); */
  background: linear-gradient(
    180deg,
    rgba(250, 127, 13, 0.3626) 0.01%,
    rgba(168, 84, 14, 0.74) 0.02%,
    rgba(147, 9, 0, 0.74) 16.4%,
    rgba(6, 0, 2, 0.9) 100%
  );
  display: grid;
  grid-template-columns: 0.5fr 4fr 4fr 0.5fr;
  grid-template-rows: 1fr 0.5fr 3fr 1fr 0.5fr;
`;

const sunsetStyle = css`
  grid-column: 2/4;
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
  /* width: 100%;
  height: 100%; */
  /* object-fit: contain; */
  /* height: 100%; */
  /* width: 100%; */
`;

const innerContainer = css`
  grid-column: 2/4;
  grid-row: 3/5;
  box-shadow: 0 0 4px black, 0 0 10px black;
  /* background-color: #fff5ee; */
  /* text-shadow: 0 0 6px #a52a2a, 0 0 4px #b22222, 0 0 3px #a52a2a,
    0 0 1px #a52a2a; */
  background: linear-gradient(
    180deg,
    rgba(240, 234, 229, 0.498) 10.01%,
    rgba(240, 228, 217, 0.469) 20.02%,
    #8683832c 46.4%,
    rgba(83, 80, 81, 0.027) 100%
  );
  border: 1.5px solid black;
  border-radius: 20px;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* row-gap: 50px; */
  padding: 0px 10px 0px 10px;
`;

const takeSpace = css`
  grid-column: 1/5;
  grid-row: 3/4;
`;

export default function GradientContainer(props: Props) {
  return (
    <div css={mainContainer}>
      <div css={sunsetStyle} />
      <div css={innerContainer}>{props.children}</div>
      <div css={takeSpace} />
    </div>
  );
}
