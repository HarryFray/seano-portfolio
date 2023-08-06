import peformRequest from "../lib/datocms";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

import { IProject } from "../page";

const PROJECT_QUERY = (slug: string) => `
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
      projectRole
      landingBackground {
        responsiveImage {
          base64
          src
        }
      }
      projectImageGallery {
        responsiveImage {
          src
        }
      }
    }
  }
`;

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
      <Image
        src={project?.landingBackground?.responsiveImage?.src}
        style={{ zIndex: -1 }}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt={`${project.title} background image`}
      />
      <h1 className="text-3xl text-white mb-8">{project.title}</h1>
      <div className="relative flex items-center">
        <div className="absolute -left-16">
          {project?.prevProject?.slug && (
            <Link href={`${project.prevProject.slug}`}>
              <span className="text-white text-4xl cursor-pointer">
                <FaChevronLeft />
              </span>
            </Link>
          )}
        </div>
        <iframe
          src={project.projectVideo}
          allow="autoplay; fullscreen; picture-in-picture"
          style={{ animation: "fadein 1s" }}
          allowFullScreen
          width={1000}
          height={600}
        />
        <div className="absolute -right-16">
          {project?.nextProject?.slug && (
            <Link href={`${project.nextProject.slug}`}>
              <span className="text-white text-4xl cursor-pointer">
                <FaChevronRight />
              </span>
            </Link>
          )}
        </div>
      </div>
      <h2 className="text-2xl text-white mt-8">{project.projectRole}</h2>
      <span className="text-white text-4xl cursor-pointer mt-16">
        <FaChevronDown />
      </span>
    </main>
  );
};

export default Project;
