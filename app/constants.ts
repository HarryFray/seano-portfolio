import { StaticImageData } from "next/image";

import TestBackgroundIMG_A from "../public/test-bkg-a.jpg";
import TestBackgroundIMG_B from "../public/test-bkg-b.jpg";

interface Project {
  title: string;
  path: string;
  backgroundImage: StaticImageData;
}

const VIDEOGRAPHY_PROJECTS: Project[] = [
  {
    title: "Ethereal Elopement",
    path: "ethereal_elopement",
    backgroundImage: TestBackgroundIMG_A,
  },
  {
    title: "Pixelated Dreams",
    path: "pixelated_dreams",
    backgroundImage: TestBackgroundIMG_B,
  },
  {
    title: "Wanderlust Chronicles",
    path: "wanderlust_chronicles",
    backgroundImage: TestBackgroundIMG_A,
  },
  {
    title: "Rhythm of the Streets",
    path: "rhythm_of_the_streets",
    backgroundImage: TestBackgroundIMG_B,
  },
  {
    title: "Gadgetopia Unveiled",
    path: "gadgetopia_unveiled",
    backgroundImage: TestBackgroundIMG_A,
  },
  {
    title: "Voices of Change",
    path: "voices_of_change",
    backgroundImage: TestBackgroundIMG_B,
  },
  {
    title: "Runway Enchantment",
    path: "runway_enchantment",
    backgroundImage: TestBackgroundIMG_A,
  },
  {
    title: "Victory Symphony",
    path: "victory_symphony",
    backgroundImage: TestBackgroundIMG_B,
  },
];

export { VIDEOGRAPHY_PROJECTS };
