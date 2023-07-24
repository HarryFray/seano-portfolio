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
  const [showCurrentGif, setshowCurrentGif] = useState(true);

  useEffect(() => {
    setshowCurrentGif(false);
    setTimeout(() => {
      setshowCurrentGif(true);
    }, 500);
  }, [currentProject]);

  return (
    <main className="min-h-screen">
      <Image
        style={{
          zIndex: -1,
          opacity: 1,
          filter: "brightness(0.7)",
          animation: "fadein 2s",
        }}
        src={currentProject?.landingBackground?.responsiveImage?.src}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt={`${currentProject.title} background image`}
        placeholder="blur"
        blurDataURL={currentProject?.landingBackground?.responsiveImage?.base64}
      />
      <div className="mx-40 flex items-center justify-between min-h-screen">
        <div className="w-fit flex flex-col">
          {allProjects.map(({ title, slug }, i) => {
            return (
              <Link
                key={`${slug}${i}`}
                onMouseEnter={() => setCurrentProject(allProjects[i])}
                className="w-fit text-base font-semibold hover:line-through mb-1.5 text-white "
                href={`/seano-proj/${slug}`}
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
            blurDataURL={currentProject?.landingGif?.responsiveImage?.base64}
            placeholder="blur"
            style={{ animation: "fadein 2s" }}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
