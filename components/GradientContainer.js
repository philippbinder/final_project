import { css } from '@emotion/react';

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 4fr 0.5fr 10fr 0.5fr;
  grid-template-rows: 1.5fr 1.5fr 7.5fr 1fr;
  /* grid-row-gap: 40px;
  grid-column-gap: 20px; */
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.5vw;
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
`;
// original helles orange rgba(202, 129, 20, 0.74) 0.02%,

export default function GradientContainer(props) {
  return <div style={mainContainer}>{props.children}</div>;
}
