import peformRequest from "../global/datocms";
import { IProject } from "../global/globalStore";
import ProjectPage from "../components/projectPage";
import { PROJECT_QUERY, PROJECTS_QUERY } from "../global/queries";

interface IProjectProps {
  params: {
    project_id: string;
  };
}

const Project = async ({ params }: IProjectProps) => {
  const { data: projectData } = await peformRequest({
    query: PROJECT_QUERY(params.project_id),
  });

  const { data: allProjectsData } = await peformRequest({
    query: PROJECTS_QUERY,
  });

  const allProjects: IProject[] = allProjectsData.allProjects;

  const project: IProject = projectData.project;

  return <ProjectPage project={project} allProjects={allProjects} />;
};

export default Project;
