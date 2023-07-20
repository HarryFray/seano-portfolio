import LandingPage from "./landingPage";
import peformRequest from "./lib/datocms";

const PAGE_CONTENT_QUERY = `{
  allProjects {
    id
    title
 
    background {
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
  const { data } = await peformRequest({ query: PAGE_CONTENT_QUERY });

  const { allProjects } = data;

  return <LandingPage allProjects={allProjects} />;
};

export default Home;
