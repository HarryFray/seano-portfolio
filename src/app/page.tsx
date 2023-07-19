"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import TestBackgroundIMG_A from "../../public/test-bkg-a.jpg";
import TestBackgroundIMG_B from "../../public/test-bkg-b.jpg";

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

const Home = () => {
  const [currentProject, setCurrentProject] = useState(VIDEOGRAPHY_PROJECTS[0]);

  return (
    <main className="min-h-screen">
      <div className="p-4">
        <Image
          alt="some image"
          src={currentProject.backgroundImage}
          style={{ zIndex: -1 }}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <h1 className="text-2xl font-bold">SeanO Portfolio</h1>
      </div>
      <div className="p-24">
        <div className="w-fit flex flex-col">
          {VIDEOGRAPHY_PROJECTS.map(({ title, path }, i) => {
            return (
              <Link
                key={`${path}${i}`}
                onMouseEnter={() => setCurrentProject(VIDEOGRAPHY_PROJECTS[i])}
                className="w-fit text-base font-semibold hover:underline cursor-pointer"
                href={`/seano-proj/${path}`}
              >
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
