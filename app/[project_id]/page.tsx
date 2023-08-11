import peformRequest from "../lib/datocms";
import { IProject } from "../page";
import ProjectPage from "../components/projectPage";

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
  const { data } = await peformRequest({
    query: PROJECT_QUERY(params.project_id),
  });

  const project: IProject = data.project;

  return <ProjectPage project={project} />;
};

export default Project;
