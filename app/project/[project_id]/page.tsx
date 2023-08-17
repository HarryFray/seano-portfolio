"use client";
import { Project } from "../../global/globalStore";
import ProjectPage from "../../components/projectPage";
import { buildProjectQuery, PROJECTS_QUERY } from "../../global/queries";
import { useQuerySubscription } from "react-datocms";

interface projectProps {
  params: {
    project_id: string;
  };
}

const Project = ({ params }: projectProps) => {
  const { data: projectData } = useQuerySubscription({
    enabled: true,
    query: buildProjectQuery(params.project_id),
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  const { data: allProjectsData } = useQuerySubscription({
    enabled: true,
    query: PROJECTS_QUERY,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  if (!projectData || !allProjectsData) {
    return null;
  }

  const allProjects: Project[] = allProjectsData.allProjects;

  const project: Project = projectData.project;

  return <ProjectPage project={project} allProjects={allProjects} />;
};

export default Project;
