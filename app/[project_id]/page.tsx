import peformRequest from "../lib/datocms";

const projectQuery = (slug: string) => {
  return `
    query {
      project(filter: { slug: { eq: "${slug}" } }) {
        title
        projectVideo
      }
    }
  `;
};

interface IProjectProps {
  params: {
    project_id: string;
  };
}

const Project = async ({ params }: IProjectProps) => {
  const { data } = await peformRequest({
    query: projectQuery(params.project_id),
  });

  return (
    <main className="min-h-screen p-40">
      <h1>{data.project.title}</h1>{" "}
    </main>
  );
};

export default Project;
