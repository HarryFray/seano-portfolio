import LandingPage from "./components/landingPage";
import peformRequest from "./lib/datocms";

const LANDING_PAGE_QUERY = `{
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

const Home = async () => {
  const { data } = await peformRequest({ query: LANDING_PAGE_QUERY });

  const { allProjects } = data;

  return <LandingPage allProjects={allProjects} />;
};

export default Home;
