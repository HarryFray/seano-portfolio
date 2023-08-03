import peformRequest from "../lib/datocms";
import Link from "next/link";
import { IProject } from "../page";

const PROJECT_QUERY = (slug: string) => {
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
    query: PROJECT_QUERY(params.project_id),
  });

  const project: IProject = data.project;

  return (
    <main className="flex items-center flex-col min-h-screen p-28">
      <h1 className="text-2xl text-white mb-8">{project.title}</h1>
      <iframe
        src={project.projectVideo}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        width={1000}
        height={600}
      />
      <div className="w-96 flex justify-around mt-8">
        {project?.prevProject?.slug && (
          <Link className="text-white" href={`${project.prevProject.slug}`}>
            Prev
          </Link>
        )}
        {project?.nextProject?.slug && (
          <Link className="text-white" href={`${project.nextProject.slug}`}>
            Next
          </Link>
        )}
      </div>
    </main>
  );
};

export default Project;
