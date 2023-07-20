"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "./constants";

const Home = ({ allProjects }: { allProjects: Project[] }) => {
  const [currentProject, setCurrentProject] = useState(allProjects[0]);

  return (
    <main className="min-h-screen">
      <Image
        style={{
          zIndex: -1,
          opacity: 1,
          filter: "brightness(0.7)",
          animation: "fadein 2s",
        }}
        src={currentProject?.background?.responsiveImage?.base64}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt={`${currentProject.title} background image`}
        placeholder="blur"
        blurDataURL={currentProject?.background?.responsiveImage?.base64}
      />
      <h1 className="text-4xl font-bold text-white absolute p-4">
        SeanO PortfoliO
      </h1>
      <div className="mx-40 flex items-center justify-between min-h-screen">
        <div className="w-fit flex flex-col">
          {allProjects.map(({ title, id }, i) => {
            return (
              <Link
                key={`${id}${i}`}
                onMouseEnter={() => setCurrentProject(allProjects[i])}
                className="w-fit text-base font-semibold hover:line-through cursor-pointer mb-1.5 text-white "
                href={`/seano-proj/${id}`}
              >
                {title}
              </Link>
            );
          })}
        </div>
        <Image
          src={currentProject?.landingGif?.responsiveImage?.base64}
          alt={`${currentProject.title} gif`}
          quality={100}
          width={500}
          height={500}
          blurDataURL={currentProject?.background?.responsiveImage?.base64}
          placeholder="blur"
        />
      </div>
    </main>
  );
};

export default Home;
