"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import TestGifA from "../public/test-gif-a.gif";
import { VIDEOGRAPHY_PROJECTS } from "./constants";

const Home = () => {
  const [currentProject, setCurrentProject] = useState(VIDEOGRAPHY_PROJECTS[0]);

  return (
    <main className="min-h-screen">
      <div className="p-4">
        <Image
          style={{ zIndex: -1 }}
          src={currentProject.backgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="some image"
        />
        <Image
          style={{ position: "absolute", top: 400, right: 100 }}
          src={TestGifA}
          alt="some image"
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
