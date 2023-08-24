"use client";
import "./globals.css";
import Link from "next/link";
import { useAppStore } from "./global/globalStore";
import LandingFadeOut from "./components/landingFadeOut";
import Image from "next/image";
import Logo from "./components/logo";

interface rootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: rootLayoutProps) => {
  const { curSelectedProject, prevSelectedProject, allProjects } =
    useAppStore();

  return (
    <html lang="en">
      <head>
        <title>{`Sean O'Neill`}</title>
        <meta
          name="description"
          content={`${curSelectedProject?.title} - ${curSelectedProject?.projectRole}`}
          key="desc"
        />
        {/* <meta name="robots" content="index, follow" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="fixed top-0 left-0 right-0 p-4 w-screen flex items-center justify-between z-10">
          <Logo />
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
            <div
              className="fixed"
              key={`${slug}${id}`}
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
            >
              <Image
                src={landingBackground?.webp}
                fill
                objectFit="cover"
                quality={100}
                alt={`${title} background image`}
              />
            </div>
          );
        })}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
