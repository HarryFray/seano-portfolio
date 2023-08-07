import peformRequest from "../lib/datocms";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

import { IProject } from "../page";

interface IProjectGalleryProps {
  galleryImages: IProject["projectImageGallery"];
}

const ProjectGallery = async ({ galleryImages }: IProjectGalleryProps) => {
  return (
    <>
      <span className="text-white text-4xl cursor-pointer mt-16">
        <FaChevronDown />
      </span>
      <div className="flex flex-wrap mt-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-1/4 p-2">
            <Image
              src={image?.responsiveImage?.src}
              layout="responsive"
              width={1200}
              height={800}
              alt={`Gallery Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectGallery;
