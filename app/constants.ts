import { StaticImageData } from "next/image";

import TestBackgroundIMG_A from "../public/test-bkg-a.jpg";
import TestBackgroundIMG_B from "../public/test-bkg-b.jpg";
import TestGifA from "../public/test-gif-a.gif";
import TestGifB from "../public/test-gif-b.gif";

interface Project {
  title: string;
  path: string;
  backgroundImage: StaticImageData;
  gifPreviewImage: StaticImageData;
}

const VIDEOGRAPHY_PROJECTS: Project[] = [
  {
    title: "Ethereal Elopement",
    path: "ethereal_elopement",
    backgroundImage: TestBackgroundIMG_A,
    gifPreviewImage: TestGifB,
  },
  {
    title: "Pixelated Dreams",
    path: "pixelated_dreams",
    backgroundImage: TestBackgroundIMG_B,
    gifPreviewImage: TestGifA,
  },
  {
    title: "Wanderlust Chronicles",
    path: "wanderlust_chronicles",
    backgroundImage: TestBackgroundIMG_A,
    gifPreviewImage: TestGifB,
  },
  {
    title: "Rhythm of the Streets",
    path: "rhythm_of_the_streets",
    backgroundImage: TestBackgroundIMG_B,
    gifPreviewImage: TestGifA,
  },
  {
    title: "Gadgetopia Unveiled",
    path: "gadgetopia_unveiled",
    backgroundImage: TestBackgroundIMG_A,
    gifPreviewImage: TestGifB,
  },
  {
    title: "Voices of Change",
    path: "voices_of_change",
    backgroundImage: TestBackgroundIMG_B,
    gifPreviewImage: TestGifA,
  },
  {
    title: "Runway Enchantment",
    path: "runway_enchantment",
    backgroundImage: TestBackgroundIMG_A,
    gifPreviewImage: TestGifB,
  },
  {
    title: "Victory Symphony",
    path: "victory_symphony",
    backgroundImage: TestBackgroundIMG_B,
    gifPreviewImage: TestGifA,
  },
];

export { VIDEOGRAPHY_PROJECTS };
