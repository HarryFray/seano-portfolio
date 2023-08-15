"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { Project } from "../global/globalStore";

interface projectGalleryProps {
  galleryImages: Project["projectImageGallery"];
}

const ProjectGallery = ({ galleryImages }: projectGalleryProps) => {
  const [showArrow, setShowArrow] = useState(true);

  const galleryRef = useRef<null | HTMLDivElement>(null);

  const handleDownArrowClick = () => {
    galleryRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useState(() => {
    window.addEventListener("scroll", () => setShowArrow(false));
    return (): void => {
      window.removeEventListener("scroll", () => setShowArrow(false));
    };
  });

  return (
    <div className="flex flex-col items-center" ref={galleryRef}>
      <span className="text-white text-4xl cursor-pointer mt-16 h-20">
        {showArrow && <FaChevronDown onClick={handleDownArrowClick} />}
      </span>
      <div className="flex flex-wrap mt-8">
        {galleryImages.map(({ responsiveImage }, i) => (
          <div key={i} className="w-1/4 p-2">
            <Image
              src={responsiveImage?.src}
              layout="responsive"
              width={1200}
              height={800}
              alt={`Gallery Image ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
