"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { Project } from "../global/globalStore";

const checkIfElementIsInViewport = (element: Element | null): boolean => {
  if (!element) return false;

  const rect = element?.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

interface projectGalleryProps {
  galleryImages: Project["projectImageGallery"];
  galleryVideos: Project["projectVideoGallery"];
}

const ProjectGallery = ({
  galleryImages,
  galleryVideos,
}: projectGalleryProps) => {
  const [showArrow, setShowArrow] = useState(true);

  const galleryRef = useRef<null | HTMLDivElement>(null);
  const imagesContainer = useRef<null | HTMLDivElement>(null);

  useState(() => {
    window.addEventListener("scroll", () => setShowArrow(false));
    return (): void => {
      window.removeEventListener("scroll", () => setShowArrow(false));
    };
  });

  useEffect(() => {
    const galleryImagesAreVisibleOnLoad = checkIfElementIsInViewport(
      imagesContainer?.current
    );

    setShowArrow(!galleryImagesAreVisibleOnLoad);
  }, []);

  const handleDownArrowClick = () => {
    galleryRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center" ref={galleryRef}>
      <span className="text-white mt-4 h-8 lg:text-4xl  cursor-pointer lg:mt-16 md:h-20">
        {showArrow && <FaChevronDown onClick={handleDownArrowClick} />}
      </span>
      <div
        className="flex flex-wrap mt-8 mx-auto items-center justify-center"
        ref={imagesContainer}
      >
        {galleryImages.map(({ webp }, i) => (
          <Image
            style={{ margin: "8px" }}
            key={i}
            src={webp}
            width={400}
            height={200}
            alt={`Gallery Image ${i + 1}`}
          />
        ))}
        {/* TODO: UPDATE TO HANDLE FULL SCREEN VIDEO CLICKS... */}
        {galleryVideos.map(({ webp }, i) => (
          <Image
            style={{ margin: "8px" }}
            key={i}
            src={webp}
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
