import LandingPage from "./components/landingPage";
import peformRequest from "./global/datocms";
import { IProject } from "./global/globalStore";
import { PROJECTS_QUERY } from "./global/queries";

const Home = async () => {
  const { data } = await peformRequest({ query: PROJECTS_QUERY });

  const allProjects: IProject[] = data.allProjects;

  return <LandingPage allProjects={allProjects} />;
};

export default Home;
