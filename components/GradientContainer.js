import { css } from '@emotion/react';

const gradientContainerStyle = css`
  position: absolute;
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

export default function GradientContainer(props) {
  return <div style={gradientContainerStyle}>{props.children}</div>;
}
