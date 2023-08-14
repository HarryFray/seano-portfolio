"use client";
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "../global/globalStore";
import useScreenSize from "../hooks/useWindowSizeHook";
import { useAppStore } from "../global/globalStore";

interface IProps {
  allProjects: IProject[];
}

const LandingPage = ({ allProjects }: IProps) => {
  const [showCurrentGif, setShowCurrentGif] = useState(false);

  const {
    curSelectedProject,
    setCurSelectedProject,
    prevSelectedProject,
    setPrevSelectedProject,
  } = useAppStore();

  const screenSize = useScreenSize();
  const isMobileScreenSize =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md";

  const handleMouseEvent = (
    project: IProject,
    eventType: "LEAVE" | "ENTER"
  ) => {
    if (eventType === "ENTER") {
      setCurSelectedProject(project);
      setCurSelectedProject(project);
    } else {
      setPrevSelectedProject(project);
    }
  };

  useEffect(() => {
    if (!curSelectedProject.id) {
      setCurSelectedProject(allProjects[0]);
    }
  }, [
    curSelectedProject,
    allProjects,
    setCurSelectedProject,
    setPrevSelectedProject,
  ]);

  useEffect(() => {
    if (isMobileScreenSize) {
      setShowCurrentGif(true);
    } else {
      setShowCurrentGif(false);
      setTimeout(() => setShowCurrentGif(true), 300);
    }
  }, [curSelectedProject, isMobileScreenSize]);

  return (
    <main className="min-h-screen">
      <div className="mx-8 flex flex-col items-center justify-center min-h-screen lg:flex-row lg:justify-between lg:mx-40">
        <div
          className={`w-[500px] max-w-full flex flex-col mb-10 lg:w-fit lg:m-0`}
        >
          {allProjects.map((project, i) => {
            const { title, slug, landingBackground, id } = project;

            const isCurSelectedProject = id === curSelectedProject.id;
            const isprevSelectedProject = id === prevSelectedProject.id;

            return (
              <Fragment key={`${slug}${i}`}>
                <Image
                  style={{
                    inset: 0,
                    zIndex: isCurSelectedProject ? -1 : -2,
                    animation: isCurSelectedProject
                      ? "fadeinbackgroundimg 1s"
                      : "fadeoutbackgroundimg 1s",
                    display:
                      !isCurSelectedProject && !isprevSelectedProject
                        ? "none"
                        : "block",
                  }}
                  src={landingBackground?.responsiveImage?.src}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  alt={`${title} background image`}
                />
                <Link
                  onMouseEnter={() => handleMouseEvent(project, "ENTER")}
                  onMouseLeave={() => handleMouseEvent(project, "LEAVE")}
                  onClick={() => {
                    setPrevSelectedProject({} as IProject);
                  }}
                  className={`w-fit text-base font-semibold ${
                    isMobileScreenSize && isCurSelectedProject && "line-through"
                  } hover:line-through mb-1.5 text-white`}
                  href={slug}
                >
                  {title}
                </Link>
              </Fragment>
            );
          })}
        </div>
        {curSelectedProject?.id && (
          <Image
            src={curSelectedProject?.landingGif?.responsiveImage?.src}
            alt={`${curSelectedProject.title} gif`}
            quality={100}
            width={500}
            height={500}
            style={{
              animation: "fadein 2.5s",
              display: showCurrentGif ? "block" : "none",
            }}
          />
        )}
      </div>
    </main>
  );
};

export default LandingPage;
