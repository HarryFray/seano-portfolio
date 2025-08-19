"use client";
import type { Project } from "../../global/globalStore";
import ProjectPage from "../../components/projectPage";
import { buildProjectQuery, PROJECTS_QUERY } from "../../global/queries";
import { useQuerySubscription } from "react-datocms";

interface projectProps {
  params: {
    project_id: string;
  };
}

const Project = ({ params }: projectProps) => {
  const {
    status: projectStatus,
    data: projectData,
    error: projectError,
  } = useQuerySubscription({
    enabled: true,
    query: buildProjectQuery(params.project_id),
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  const {
    status: allProjectsStatus,
    data: allProjectsData,
    error: allProjectsError,
  } = useQuerySubscription({
    enabled: true,
    query: PROJECTS_QUERY,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  if (projectError || allProjectsError) {
    console.log("DATO projectError ERROR: ", projectError);
    console.log("DATO allProjectsError ERROR: ", allProjectsError);
  }

  if (
    !projectData ||
    !allProjectsData ||
    projectStatus === "connecting" ||
    allProjectsStatus === "connecting"
  ) {
    return null;
  }

  const allProjects: Project[] = allProjectsData.allProjects;

  const project: Project = projectData.project;

  return <ProjectPage project={project} allProjects={allProjects} />;
};

export default Project;
