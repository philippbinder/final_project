import { css } from '@emotion/react';
import Link from 'next/link';
import ArtistCredits from '../components/ArtistCredits';

// const textContainer = css`
/* height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`; */

const source1 = css`
  padding-top: 25px;
  padding-left: 20px;
  font-size: 24px;
  letter-spacing: 0.1vw;
  color: rgba(255, 255, 255, 0.99);
  /* color: black; */
  /* color: #ff7b00; */
  text-shadow: 0 0 6px #000000, 0 0 5px #000000, 0 0 5px #000000,
    /* border: 2px solid black; */ 0 0 1px #000000;
`;

const source2 = css`
  color: black;
  padding-top: 50px;
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

export default function Credits() {
  return (
    <ArtistCredits>
      {/* <div css={textContainer}> */}
      <div css={source1}>
        <Link href="https://pixabay.com/photos/moon-night-full-moon-gespenstig-703537/">
          Graveyard image youWin.tsx
        </Link>
        by artist: "cocoparisienne"
      </div>
      <div css={source1}>
        <Link href="https://pixabay.com/photos/halloween-witch-scary-2899489/">
          Flying witch image youDied.tsx
        </Link>
        by artist: "cocoparisienne"
      </div>
      <div css={source2}>
        <Link href="https://opengameart.org/content/lpc-medieval-village-decorations">
          village image village.tsx
        </Link>
        <ul>
          <li>
            [LPC] Hanging signs Reemax CC-BY-SA 3.0 / GPL 3.0
            https://opengameart.org/content/lpc-hanging-signs Liberated Pixel
            Cup
          </li>
          <li>
            (LPC) Base Assets Lanea Zimmerman (Sharm) CC-BY-SA 3.0 / GPL 3.0
            https://opengameart.org/content/liberated-pixel-cup-lpc-base-assets-sprites-map-tiles
          </li>
          <li>
            [LPC] City outside Reemax (Tuomo Untinen), Xenodora, Sharm, Johann
            C, Johannes Sjölund CC-BY-SA 3.0 / GPL 3.0 / GPL 2.0
            https://opengameart.org/content/lpc-city-outside
          </li>
          <li>
            [LPC] Cavern and ruin tiles CC-BY-SA 3.0 / GPL 3.0 / GPL 2.0 Reemax,
            Sharm, Hyptosis, Johann C, HughSpectrum, Redshrike,
            William.Thompsonj, wulax, https://opengameart.org/node/33913
          </li>
          <li>
            Statues & Fountains Collection Casper Nilsson, Daniel Cook, Rayane
            Félix (RayaneFLX), Wolthera van Hövell tot Westerflier
            (TheraHedwig), Hyptosis, mold, Zachariah Husiar (Zabin), & Clint
            Bellanger CC-BY-SA 3.0
            https://opengameart.org/content/statues-fountains-collection
          </li>
          <li>
            LPC C.Nilsson Casper Nilsson CC-BY-SA 3.0 / GPL 3.0
            https://opengameart.org/content/lpc-cnilsson
          </li>
          <li>
            LPC Style Well CC-BY 3.0 / GPL 3.0 Xenodora, Sharm
            https://opengameart.org/content/lpc-style-well
          </li>
          <li>
            RPG item set Jetrel CC0 https://opengameart.org/content/rpg-item-set
          </li>
          <li>
            [LPC] Guido Bos entries cut up Guido Bos CC-BY-SA 3.0 / GPL 3.0
            https://opengameart.org/content/lpc-guido-bos-entries-cut-up
          </li>
          <li>
            LPC Sign Post Nemisys CC-BY 3.0 / CC-BY-SA 3.0 / GPL 3.0 / OGA-BY
            3.0 https://opengameart.org/content/lpc-sign-post
          </li>
          <li>
            [LPC] Signposts, graves, line cloths and scare crow Reemax CC-BY-SA
            3.0 / GPL 3.0
            https://opengameart.org/content/lpc-signposts-graves-line-cloths-and-scare-crow
          </li>
          <li>
            [LPC] Hanging signs Reemax CC-BY-SA 3.0 / GPL 3.0
            https://opengameart.org/content/lpc-hanging-signs
          </li>
          <li>
            Hyptosis Mage City Arcanos CC0
            https://opengameart.org/content/mage-city-arcanos
          </li>
          <li>
            [LPC] Street Lamp Curt CC-BY 3.0
            https://opengameart.org/content/lpc-street-lamp
          </li>
          <li>
            [LPC] Misc Lanea Zimmerman (Sharm), William.Thompsonj CC-BY 3.0 /
            GPL 3.0 / GPL 2.0 / OGA-BY 3.0
            https://opengameart.org/content/lpc-misc
          </li>
          <li>
            RPG Tiles: Cobble stone paths & town objects
            https://opengameart.org/content/rpg-tiles-cobble-stone-paths-town-objects
            Zabin, Daneeklu, Jetrel, Hyptosis, Redshrike, Bertram. CC-BY-SA 3.0
          </li>
          [LPC] Farming tilesets, magic animations and UI elements
          https://opengameart.org/content/lpc-farming-tilesets-magic-animations-and-ui-elements
          Daniel Eddeland (daneeklu) CC-BY-SA 3.0 / GPL 3.0
          <li>
            RPG item set Jetrel CC0 https://opengameart.org/content/rpg-item-set
          </li>
          <li>
            RPG Indoor Tileset: Expansion 1 Redshrike CC-BY 3.0 / GPL 3.0 / GPL
            2.0 / OGA-BY 3.0
            https://opengameart.org/content/rpg-indoor-tileset-expansion-1
          </li>
          <li>
            [LPC] Dungeon Elements Lanea Zimmerman (Sharm), William.Thompsonj
            CC-BY 3.0 / GPL 3.0 / GPL 2.0 / OGA-BY 3.0
            https://opengameart.org/content/lpc-dungeon-elements
          </li>
        </ul>
      </div>
      {/* </div> */}
    </ArtistCredits>
  );
}
