"use client";
import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../global/globalStore";
import useScreenSize from "../hooks/useWindowSizeHook";
import { useAppStore } from "../global/globalStore";

interface landingPageProps {
  allProjects: Project[];
}

const LandingPage = ({ allProjects }: landingPageProps) => {
  const [showCurrentGif, setShowCurrentGif] = useState(false);

  const { curSelectedProject, setCurSelectedProject, setAllProjects } =
    useAppStore();

  useEffect(() => {
    setAllProjects(allProjects);
    if (!curSelectedProject.id) {
      setCurSelectedProject(allProjects[0]);
    }
  }, [allProjects, setAllProjects, setCurSelectedProject, curSelectedProject]);

  const screenSize = useScreenSize();

  const isMobileScreenSize =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md";

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
          {allProjects.map((project) => {
            const { title, slug, id } = project;

            const isCurSelectedProject = id === curSelectedProject.id;

            return (
              <Fragment key={`${slug}${id}`}>
                <Link
                  onMouseEnter={() => setCurSelectedProject(project)}
                  className={`w-fit text-base font-semibold ${
                    isCurSelectedProject && "line-through"
                  } hover:line-through mb-1.5 text-white`}
                  href={`/project/${slug}`}
                >
                  {title}
                </Link>
              </Fragment>
            );
          })}
        </div>
        {curSelectedProject?.id && (
          <Image
            src={curSelectedProject?.landingGif?.webp}
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
