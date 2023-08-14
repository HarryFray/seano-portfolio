"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { IProject } from "../global/globalStore";

interface IProjectGalleryProps {
  galleryImages: IProject["projectImageGallery"];
}

const ProjectGallery = ({ galleryImages }: IProjectGalleryProps) => {
  const [showArrow, setShowArrow] = useState(true);
  const galleryRef = useRef<null | HTMLDivElement>(null);

  const handleArrowClick = () => {
    galleryRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    setShowArrow(false);
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="flex flex-col items-center" ref={galleryRef}>
      <span className="text-white text-4xl cursor-pointer mt-16 h-20">
        {showArrow && <FaChevronDown onClick={handleArrowClick} />}
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
    </div>
  );
};

export default ProjectGallery;
