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

  useEffect(() => {
    if (screenSize === "xs" || screenSize === "sm") {
      setShowArrow(false);
    }
  }, [screenSize]);

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
      {showArrow && (
        <span className="text-white lg:text-4xl  cursor-pointer mt-16 h-20">
          <FaChevronDown onClick={handleDownArrowClick} />
        </span>
      )}
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
