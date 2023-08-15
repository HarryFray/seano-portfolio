import peformRequest from "../../global/datocms";
import { Project } from "../../global/globalStore";
import ProjectPage from "../../components/projectPage";
import { buildProjectQuery, PROJECTS_QUERY } from "../../global/queries";

interface projectProps {
  params: {
    project_id: string;
  };
}

const Project = async ({ params }: projectProps) => {
  const { data: projectData } = await peformRequest({
    query: buildProjectQuery(params.project_id),
  });

  const { data: allProjectsData } = await peformRequest({
    query: PROJECTS_QUERY,
  });

  const allProjects: Project[] = allProjectsData.allProjects;

  const project: Project = projectData.project;

  return <ProjectPage project={project} allProjects={allProjects} />;
};

export default Project;
