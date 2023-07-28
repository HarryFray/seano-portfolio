"use client";
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "../page";
import throttle from "lodash/throttle";
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

  const handleMouseEvent = throttle(
    (i: number, eventType: "LEAVE" | "ENTER") => {
      if (eventType === "ENTER") {
        setCurrentProject(allProjects[i]);
      } else {
        setPrevProject(allProjects[i]);
      }
    },
    1000
  );

  const GIF_WIDTH = 500;

  return (
    <main className="min-h-screen">
      <div
        className="mx-10 flex flex-col items-center justify-center min-h-screen 
      lg:flex-row lg:justify-between lg:mx-40"
      >
        <div
          className={`w-[${GIF_WIDTH}px] max-w-full flex flex-col mb-10
          lg:w-fit lg:m-0`}
        >
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
                />
                <Link
                  onMouseEnter={() => handleMouseEvent(i, "ENTER")}
                  onMouseLeave={() => handleMouseEvent(i, "LEAVE")}
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
            width={GIF_WIDTH}
            height={GIF_WIDTH}
            style={{ animation: "fadein 2.5s" }}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
