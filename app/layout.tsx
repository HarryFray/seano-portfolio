"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useAppStore } from "./global/globalStore";
import LandingFadeOut from "./components/landingFadeOut";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { curSelectedProject } = useAppStore();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 p-4 w-screen flex items-center justify-between z-10">
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Ubuntu+Mono&display=swap"
            rel="stylesheet"
          />
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
        </header>
        <LandingFadeOut />
        <div
          className="fixed inset-0 z-[-2]"
          style={{
            backgroundImage: `url(${curSelectedProject?.landingBackground?.responsiveImage?.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
