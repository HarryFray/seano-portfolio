import peformRequest from "../global/datocms";
import { IProject } from "../global/globalStore";
import ProjectPage from "../components/projectPage";

const PROJECTS_QUERY = `{
  allProjects {
    id
    title
    slug
    landingBackground {
      responsiveImage {
        base64
        src
      }
    }
    landingGif {
      responsiveImage {
        base64
        src
      }
    }
  }
}`;

const PROJECT_QUERY = (slug: string) => `
  query {
    project(filter: { slug: { eq: "${slug}" } }) {
      title
      projectVideo
      id
      prevProject {
        slug
      }
      nextProject {
        slug
      }
      projectRole
      landingBackground {
        responsiveImage {
          base64
          src
        }
      }
      landingGif {
        responsiveImage {
          base64
          src
        }
      }
      projectImageGallery {
        responsiveImage {
          src
        }
      }
    }
  }
`;

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
