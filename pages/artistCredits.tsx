import { css } from '@emotion/react';
import Link from 'next/link';
import ArtistCredits from '../components/ArtistCredits';

// const textContainer = css`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

const source1 = css`
  padding-top: 25px;
  padding-left: 20px;
  font-size: 24px;
  letter-spacing: 0.1vw;
  color: rgba(255, 255, 255, 0.99);
  /* color: #ff7b00; */
  text-shadow: 0 0 6px #000000, 0 0 5px #000000, 0 0 5px #000000,
    /* border: 2px solid black; */ 0 0 1px #000000;
`;

const source2 = css`
  padding-top: 25px;
  padding-left: 20px;
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
`;

export default function YouDied() {
  return (
    <ArtistCredits>
      <div css={source1}>
        <Link href="https://pixabay.com/photos/moon-night-full-moon-gespenstig-703537/">
          Graveyard image youWin
        </Link>
        by artist: "cocoparisienne"
      </div>
      <div css={source1}>
        <Link href="https://pixabay.com/photos/halloween-witch-scary-2899489/">
          Flying witch image youWin
        </Link>
        by artist: "cocoparisienne"
      </div>
      <div css={source2}>
        In your last moments you look up to the night sky and see the mayoress
        ridding a broom and flying through the air. As it turns out she has
        really been a witch. Who would have thought?
      </div>
    </ArtistCredits>
  );
}
