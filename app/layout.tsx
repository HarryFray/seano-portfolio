"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useAppStore } from "./global/globalStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBackground, setShowBackground] = useState(true);
  const [fadeOutComplete, setFadeOutComplete] = useState(false);

  const { curSelectedProject } = useAppStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(false);
      setTimeout(() => {
        setFadeOutComplete(true);
      }, 1000);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        {!fadeOutComplete && (
          <div
            className={`flex flex-col items-center justify-center fixed inset-0 bg-black z-20 ${
              showBackground ? "" : "opacity-0 transition-opacity duration-1000"
            }`}
          >
            <h2 className="text-2xl text-white font-bold">
              {`"Like I don't even know what boxes are"`}
            </h2>
            <h1 className="text-6xl text-white font-bold mt-12">
              - SEAN O’NEILL
            </h1>
          </div>
        )}
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
}
