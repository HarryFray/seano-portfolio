"use client";
import "./globals.css";
import Link from "next/link";
import { useAppStore } from "./global/globalStore";
import LandingFadeOut from "./components/landingFadeOut";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { curSelectedProject } = useAppStore();

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
        <div
          className="fixed inset-0 z-[-2]"
          style={{
            backgroundImage: `url(${curSelectedProject?.landingBackground?.responsiveImage?.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
