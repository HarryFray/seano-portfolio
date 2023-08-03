"use client";
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "../page";
import throttle from "lodash/throttle";
import useScreenSize from "../lib/useWindowSizeHook";
interface IProps {
  allProjects: IProject[];
}

const Home = ({ allProjects }: IProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [prevProjectIndex, setPrevProjectIndex] = useState(0);

  const currentProject = allProjects[currentProjectIndex];
  const prevProject = allProjects[prevProjectIndex];

  const [showCurrentGif, setShowCurrentGif] = useState(false);

  const screenSize = useScreenSize();
  const isMobileSceenSize =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md";

  useEffect(() => {
    if (!isMobileSceenSize) return;

    const cycleProjects = () => {
      const newIndex =
        currentProjectIndex === allProjects.length - 1
          ? 0
          : currentProjectIndex + 1;
      setCurrentProjectIndex(newIndex);
      setPrevProjectIndex(currentProjectIndex);
    };

    if (isMobileSceenSize) {
      const timer = setInterval(cycleProjects, 2000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [currentProjectIndex, isMobileSceenSize, allProjects.length]);

  useEffect(() => {
    if (isMobileSceenSize) {
      setShowCurrentGif(true);
      return;
    }

    setShowCurrentGif(false);
    setTimeout(() => setShowCurrentGif(true), 300);
  }, [currentProject, isMobileSceenSize]);

  const handleMouseEvent = throttle(
    (i: number, eventType: "LEAVE" | "ENTER") => {
      if (eventType === "ENTER") {
        setCurrentProjectIndex(i);
      } else {
        setPrevProjectIndex(i);
      }
    },
    1000
  );

  return (
    <main className="min-h-screen">
      <div
        className="mx-8 flex flex-col items-center justify-center min-h-screen 
      lg:flex-row lg:justify-between lg:mx-40"
      >
        <div
          className={`w-[500px] max-w-full flex flex-col mb-10
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
                  className={`w-fit text-base font-semibold ${
                    isMobileSceenSize && isCurrentProject && "line-through"
                  } hover:line-through mb-1.5 text-white`}
                  href={slug}
                >
                  {title}
                </Link>
              </Fragment>
            );
          })}
        </div>
        <Image
          src={currentProject?.landingGif?.responsiveImage?.src}
          alt={`${currentProject.title} gif`}
          quality={100}
          width={500}
          height={500}
          style={{
            animation: "fadein 2.5s",
            display: showCurrentGif ? "block" : "none",
          }}
        />
      </div>
    </main>
  );
};

export default Home;
