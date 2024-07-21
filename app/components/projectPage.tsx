"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Project } from "../global/globalStore";
import ProjectGallery from "../components/projectGallery";
import { useAppStore } from "../global/globalStore";
import useScreenSize from "../hooks/useWindowSizeHook";

interface projectProps {
  project: Project;
  allProjects: Project[];
}

const ProjectPage = ({ project, allProjects }: projectProps) => {
  const { setCurSelectedProject, setAllProjects } = useAppStore();

  const screenSize = useScreenSize();

  const iFrameHeight = {
    xs: 180,
    sm: 200,
    md: 300,
    lg: 400,
    xl: 500,
    "2xl": 600,
  }[screenSize];

  useEffect(() => {
    setCurSelectedProject(project);
    setAllProjects(allProjects);
  }, [project, setCurSelectedProject, allProjects, setAllProjects]);

  return (
    <main className="relative pt-24 p-8 lg:p-28">
      <div className="flex flex-col items-center">
        <h1 className="text-md lg:text-2xl text-white mb-4">
          {project?.title}
        </h1>
        <div className="relative flex items-center w-full justify-between">
          <div>
            {project?.prevProject?.slug && (
              <Link href={`${project?.prevProject.slug}`}>
                <span className="text-white text-xl lg:text-4xl cursor-pointer">
                  <FaChevronLeft />
                </span>
              </Link>
            )}
          </div>
          <iframe
            src={project?.projectVideo}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              animation: "fadein 1s",
              width: Number(iFrameHeight) * 1.8,
              height: Number(iFrameHeight),
            }}
          />
          <div>
            {project?.nextProject?.slug && (
              <Link href={`${project?.nextProject.slug}`}>
                <span className="text-white text-xl lg:text-4xl cursor-pointer">
                  <FaChevronRight />
                </span>
              </Link>
            )}
          </div>
        </div>
        <h2 className="text-sm  lg:text-xl text-white mt-4">
          {project?.projectRole}
        </h2>
        {project?.projectDescription && (
          <h2 className="text-sm  lg:text-xl text-white mt-4">
            {project?.projectDescription}
          </h2>
        )}
      </div>
      {(project?.projectImageGallery?.length > 0 ||
        project?.projectVideoGallery?.length > 0) && (
        <ProjectGallery
          galleryImages={project?.projectImageGallery}
          galleryVideos={project?.projectVideoGallery}
          iFrameHeight={iFrameHeight}
        />
      )}
    </main>
  );
};

export default ProjectPage;
