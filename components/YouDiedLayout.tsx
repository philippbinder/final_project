import { css } from '@emotion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
// neccessary for tsx

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 0vw;
  font-family: MedievalSharp;
  background: radial-gradient(
    rgba(147, 9, 0, 0.44) 16.4%,
    rgba(138, 41, 52, 0.858) 30%,
    rgba(6, 0, 2, 1) 74%
  );
  background: radial-gradient(
    rgba(6, 0, 2, 1) 74%,
    rgba(147, 9, 0, 0.74) 96.4%
  );
  /* rgba(6, 0, 2, 0.9) 99% */
  /* background-image: url('/images/witchYouDied.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  display: grid;
  grid-template-columns: 1fr 0.5fr 8fr 0.5fr 1fr;
  grid-template-rows: 0.5fr 3fr 0.5fr;
`;

const innerContainer = css`
  grid-column: 3/4;
  grid-row: 2/3;
  box-shadow: 0 0 4px black, 0 0 10px black;
  /* background: linear-gradient(
    180deg,
    rgba(240, 234, 229, 0.498) 10.01%,
    rgba(240, 228, 217, 0.469) 20.02%,
    #8683832c 46.4%,
    rgba(83, 80, 81, 0.027) 100%
  ); */
  background-image: url('/images/witchYouDied.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1.5px solid black;
  border-radius: 20px;
  padding: 0px 10px 0px 10px;
`;

const takeSpace = css`
  grid-column: 1/6;
  grid-row: 3/4;
`;

export default function YouDiedLayout(props: Props) {
  return (
    <div css={mainContainer}>
      <div css={innerContainer}>{props.children}</div>
      <div css={takeSpace} />
    </div>
  );
}
