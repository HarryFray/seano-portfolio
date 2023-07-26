import peformRequest from "../lib/datocms";
import Link from "next/link";

const projectQuery = (slug: string) => {
  return `
    query {
      
      project(filter: { slug: { eq: "${slug}" } }) {
        title
        projectVideo

        prevProject {
          slug
        }

        nextProject {
          slug
        }
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

  console.log({data})

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
      <div className="w-96 flex justify-around">
        <Link className="text-white" href={`/${data.project.prevProject.slug}`}>
          Prev
        </Link>
        <Link className="text-white" href={`/${data.project.nextProject.slug}`}>
          Next
        </Link>
      </div>
    </main>
  );
};

export default Project;
