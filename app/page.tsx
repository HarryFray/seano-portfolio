"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
          alt={`${currentProject.title} background image`}
          placeholder="blur"
        />
        <h1 className="text-2xl font-bold text-white">SeanO Portfolio</h1>
      </div>
      <div className="mx-40 my-80 flex align-center justify-between">
        <div className="w-fit flex flex-col">
          {VIDEOGRAPHY_PROJECTS.map(({ title, path }, i) => {
            return (
              <Link
                key={`${path}${i}`}
                onMouseEnter={() => setCurrentProject(VIDEOGRAPHY_PROJECTS[i])}
                className="w-fit text-base font-semibold hover:line-through cursor-pointer mb-1.5 text-white "
                href={`/seano-proj/${path}`}
              >
                {title}
              </Link>
            );
          })}
        </div>
        <Image
          src={currentProject.gifPreviewImage}
          alt={`${currentProject.title} gif`}
          quality={100}
        />
      </div>
    </main>
  );
};

export default Home;
