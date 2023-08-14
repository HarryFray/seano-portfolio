"use client";
import "./globals.css";
import Link from "next/link";
import { useAppStore } from "./global/globalStore";
import LandingFadeOut from "./components/landingFadeOut";
import Image from "next/image";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { curSelectedProject, prevSelectedProject } = useAppStore();

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
        <Image
          style={{
            inset: 0,
            zIndex: -1,
            animation: "fadeinbackgroundimg 1s",
          }}
          src={curSelectedProject?.landingBackground?.responsiveImage?.src}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={`${curSelectedProject?.title} background image`}
        />
        <Image
          style={{
            inset: 0,
            zIndex: -2,
            animation: "fadeoutbackgroundimg 1s",
          }}
          src={prevSelectedProject?.landingBackground?.responsiveImage?.src}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={`${prevSelectedProject?.title} background image`}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
