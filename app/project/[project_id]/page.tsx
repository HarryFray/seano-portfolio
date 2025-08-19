"use client";
import type { Project } from "../../global/globalStore";
import ProjectPage from "../../components/projectPage";
import { buildProjectQuery } from "../../global/queries";
import { useQuerySubscription } from "react-datocms";

interface PageProps {
  params: {
    project_id: string;
  };
}

export default function Project({ params }: PageProps) {
  const {
    status: projectStatus,
    data: projectData,
    error: projectError,
  } = useQuerySubscription({
    enabled: true,
    query: buildProjectQuery(params.project_id),
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  if (projectError) {
    console.log("DATO projectError ERROR: ", projectError);
  }

  if (!projectData || projectStatus === "connecting") {
    return null;
  }

  const project: Project = projectData.project;

  return <ProjectPage project={project} />;
}
