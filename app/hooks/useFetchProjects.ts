import peformRequest from "../global/datocms";
import { IProject } from "../global/globalStore";

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

const useFetchProjects = async () => {
  const { data } = await peformRequest({ query: PROJECTS_QUERY });

  const allProjects: IProject[] = data.allProjects;

  return { allProjects };
};

export default useFetchProjects;
