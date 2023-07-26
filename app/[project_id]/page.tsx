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
    <main className="flex items-center flex-col min-h-screen p-40">
      <h1 className="text-2xl text-white">{data.project.title}</h1>
      <iframe
        src={data.project.projectVideo}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        width={800}
        height={600}
      />
    </main>
  );
};

export default Project;
