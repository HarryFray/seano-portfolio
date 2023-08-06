import LandingPage from "./components/landingPage";
import peformRequest from "./lib/datocms";

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

export interface IProject {
  id: string;
  title: string;
  slug: string;
  projectVideo: string;
  prevProject: IProject;
  nextProject: IProject;
  projectRole: string;
  projectImageGallery: {
    responsiveImage: {
      src: string;
    };
  }[];
  landingBackground: {
    responsiveImage: {
      src: string;
      base64: string;
    };
  };
  landingGif: {
    responsiveImage: {
      src: string;
      base64: string;
    };
  };
}

const Home = async () => {
  const { data } = await peformRequest({ query: PROJECTS_QUERY });

  const allProjects: IProject[] = data.allProjects;

  return <LandingPage allProjects={allProjects} />;
};

export default Home;
