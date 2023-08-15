"use client";
import { Fragment } from "react";
import "./globals.css";
import Link from "next/link";
import { useAppStore } from "./global/globalStore";
import LandingFadeOut from "./components/landingFadeOut";
import Image from "next/image";

interface rootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: rootLayoutProps) => {
  const { curSelectedProject, prevSelectedProject, allProjects } =
    useAppStore();

  return (
    <html lang="en">
      <head>
        <title>{"Sean O'Neill"}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="fixed top-0 left-0 right-0 p-4 w-screen flex items-center justify-between z-10">
          <Link
            href="/"
            className="text-4xl font-bold text-white hover:line-through"
          >
            SEAN O’NEILL
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-bold hover:line-through text-white"
          >
            Contact
          </Link>
        </div>
        <LandingFadeOut />
        {allProjects.map(({ title, slug, landingBackground, id }) => {
          const isCurSelectedProject = id === curSelectedProject.id;
          const isprevSelectedProject = id === prevSelectedProject.id;

          return (
            <Fragment key={`${slug}${id}`}>
              <Image
                style={{
                  inset: 0,
                  zIndex: isCurSelectedProject ? -1 : -2,
                  animation: isCurSelectedProject
                    ? "fadeinbackgroundimg 1s"
                    : "fadeoutbackgroundimg 1s",
                  display:
                    !isCurSelectedProject && !isprevSelectedProject
                      ? "none"
                      : "block",
                }}
                src={landingBackground?.responsiveImage?.src}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt={`${title} background image`}
              />
            </Fragment>
          );
        })}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
