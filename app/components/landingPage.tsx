"use client";
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "../constants";

interface IProps {
  allProjects: IProject[];
}

const Home = ({ allProjects }: IProps) => {
  const [currentProject, setCurrentProject] = useState(allProjects[0]);
  const [prevProject, setPrevProject] = useState(allProjects[0]);

  const [showCurrentGif, setShowCurrentGif] = useState(false);

  useEffect(() => {
    setShowCurrentGif(false);
    setTimeout(() => setShowCurrentGif(true), 300);
  }, [currentProject]);

  return (
    <main className="min-h-screen">
      <div className="mx-40 flex items-center justify-between min-h-screen">
        <div className="w-fit flex flex-col">
          {allProjects.map(({ title, slug, landingBackground, id }, i) => {
            const isCurrentProject = id === currentProject.id;
            const isPrevProject = id === prevProject.id;

            return (
              <Fragment key={`${slug}${i}`}>
                <Image
                  style={{
                    zIndex: isCurrentProject ? -1 : -2,
                    animation: isCurrentProject
                      ? "fadeinbackgroundimg 1s"
                      : "fadeoutbackgroundimg 1s",
                    display:
                      !isCurrentProject && !isPrevProject ? "none" : "block",
                  }}
                  src={landingBackground?.responsiveImage?.src}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  alt={`${title} background image`}
                  // placeholder="blur"
                  // blurDataURL={
                  //   currentProject?.landingBackground?.responsiveImage?.base64
                  // }
                />
                <Link
                  onMouseEnter={() => setCurrentProject(allProjects[i])}
                  onMouseLeave={() => setPrevProject(allProjects[i])}
                  className="w-fit text-base font-semibold hover:line-through mb-1.5 text-white "
                  href={slug}
                >
                  {title}
                </Link>
              </Fragment>
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
            style={{ animation: "fadein 2.5s" }}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
