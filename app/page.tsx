"use client";
import LandingPage from "./components/landingPage";
import { Project } from "./global/globalStore";
import { PROJECTS_QUERY } from "./global/queries";
import { useQuerySubscription } from "react-datocms";

const Home = () => {
  const { status, data } = useQuerySubscription({
    enabled: true,
    query: PROJECTS_QUERY,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  if (status === "connecting" || !data) {
    return null;
  }

  const allProjects: Project[] = data.allProjects;

  return <LandingPage allProjects={allProjects} />;
};

export default Home;
