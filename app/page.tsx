"use client";
import { useEffect } from "react";
import LandingPage from "./components/landingPage";
import peformRequest from "./global/datocms";
import { Project } from "./global/globalStore";
import { PROJECTS_QUERY, SEAN_INFO_QUERY } from "./global/queries";
import { useQuerySubscription } from "react-datocms";

const apiToken = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;
const Home = () => {
  const { status, error, data } = useQuerySubscription({
    enabled: true,
    query: `{
      seanInfo {
        workImage {
          responsiveImage {
            src
          }
        }
      }
    }`,
    variables: { first: 10 },
    token: apiToken || "",
  });

  const statusMessage = {
    connecting: "Connecting to DatoCMS...",
    connected: "Connected to DatoCMS, receiving live updates!",
    closed: "Connection closed",
  };

  console.log({ data });

  useEffect(() => {
    console.log({ data });
    console.log({ error });
    console.log({ status });
  }, [status]);

  return (
    <div>
      <p className="text-white">Connection status: {statusMessage[status]}</p>
      {error && (
        <div>
          <h1 className="text-white">Error: {error.code}</h1>
          <div className="text-white">{error.message}</div>
          {error.response && (
            <pre className="text-white">
              {JSON.stringify(error.response, null, 2)}
            </pre>
          )}
        </div>
      )}
      <h1 className="text-white">{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Home;
