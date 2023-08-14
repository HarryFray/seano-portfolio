"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IProject } from "../global/globalStore";
import ProjectGallery from "../components/projectGallery";
import { useAppStore } from "../global/globalStore";

interface IProjectProps {
  project: IProject;
  allProjects: IProject[];
}

const ProjectPage = ({ project, allProjects }: IProjectProps) => {
  const { setCurSelectedProject, setAllProjects } = useAppStore();

  useEffect(() => {
    setCurSelectedProject(project);
    setAllProjects(allProjects);
  }, [project, setCurSelectedProject, allProjects, setAllProjects]);

  return (
    <main className="relative p-28">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-white mb-8">{project?.title}</h1>
        <div className="relative flex items-center">
          <div className="absolute -left-16">
            {project?.prevProject?.slug && (
              <Link href={`${project?.prevProject.slug}`}>
                <span className="text-white text-4xl cursor-pointer">
                  <FaChevronLeft />
                </span>
              </Link>
            )}
          </div>
          <iframe
            src={project?.projectVideo}
            allow="autoplay; fullscreen; picture-in-picture"
            style={{ animation: "fadein 1s" }}
            allowFullScreen
            width={1000}
            height={600}
          />
          <div className="absolute -right-16">
            {project?.nextProject?.slug && (
              <Link href={`${project?.nextProject.slug}`}>
                <span className="text-white text-4xl cursor-pointer">
                  <FaChevronRight />
                </span>
              </Link>
            )}
          </div>
        </div>
        <h2 className="text-2xl text-white mt-8">{project?.projectRole}</h2>
      </div>
      {project?.projectImageGallery?.length > 0 && (
        <ProjectGallery galleryImages={project?.projectImageGallery} />
      )}
    </main>
  );
};

export default ProjectPage;
