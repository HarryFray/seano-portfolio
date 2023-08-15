"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { Project } from "../global/globalStore";
import useScreenSize from "../hooks/useWindowSizeHook";

interface projectGalleryProps {
  galleryImages: Project["projectImageGallery"];
}

const ProjectGallery = ({ galleryImages }: projectGalleryProps) => {
  const [showArrow, setShowArrow] = useState(true);

  const galleryRef = useRef<null | HTMLDivElement>(null);

  const screenSize = useScreenSize();

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
      <span className="text-white mt-4 h-8 lg:text-4xl  cursor-pointer lg:mt-16 md:h-20">
        {showArrow && <FaChevronDown onClick={handleDownArrowClick} />}
      </span>
      <div className="flex flex-wrap mt-8 mx-auto items-center justify-center">
        {galleryImages.map(({ responsiveImage }, i) => (
          <Image
            style={{ margin: "8px" }}
            key={i}
            src={responsiveImage?.src}
            width={400}
            height={200}
            alt={`Gallery Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
