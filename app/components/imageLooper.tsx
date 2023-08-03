"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { AllProjectGifs } from "../contact/page";

interface IProps {
  allProjectGifs: AllProjectGifs;
}

const ImageLooper = ({ allProjectGifs }: IProps) => {
  const [gifInViewIndex, setGifInViewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGifInViewIndex((prevIndex) => (prevIndex + 1) % allProjectGifs.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative">
      {allProjectGifs.map(({ id, title, landingGif }, i) => (
        <Image
          key={`${id}_${i}`}
          src={landingGif?.responsiveImage?.src}
          alt={`${title} gif`}
          quality={100}
          width={500}
          height={500}
          className={`${gifInViewIndex === i ? "block" : "hidden"}`}
        />
      ))}
    </div>
  );
};

export default ImageLooper;
