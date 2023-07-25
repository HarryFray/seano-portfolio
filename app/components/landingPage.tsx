"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "../constants";

interface IProps {
  allProjects: IProject[];
}

const Home = ({ allProjects }: IProps) => {
  const [currentProject, setCurrentProject] = useState(allProjects[0]);

  const [showCurrentGif, setShowCurrentGif] = useState(false);

  const [showCurrentBackground, setShowCurrentBackground] = useState(false);

  useEffect(() => {
    setShowCurrentGif(false);
    setTimeout(() => setShowCurrentGif(true), 1000);

    setShowCurrentBackground(false);
    setTimeout(() => setShowCurrentBackground(true), 1);
  }, [currentProject]);

  return (
    <main className="min-h-screen">
      {showCurrentBackground && (
        <Image
          style={{ zIndex: -1, animation: "fadeinbackgroundimg 1.5s" }}
          src={currentProject?.landingBackground?.responsiveImage?.src}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={`${currentProject.title} background image`}
          // placeholder="blur"
          // blurDataURL={
          //   currentProject?.landingBackground?.responsiveImage?.base64
          // }
        />
      )}
      <div className="mx-40 flex items-center justify-between min-h-screen">
        <div className="w-fit flex flex-col">
          {allProjects.map(({ title, slug }, i) => {
            return (
              <Link
                key={`${slug}${i}`}
                onMouseEnter={() => setCurrentProject(allProjects[i])}
                className="w-fit text-base font-semibold hover:line-through mb-1.5 text-white "
                href={slug}
              >
                {title}
              </Link>
            );
          })}
        </div>
        {showCurrentGif && (
          <Image
            src={currentProject?.landingGif?.responsiveImage?.src}
            alt={`${currentProject.title} gif`}
            quality={100}
            width={500}
            height={500}
            style={{ animation: "fadein 2s" }}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
