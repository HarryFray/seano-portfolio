"use client";
import React, { useEffect, useState } from "react";

const LandingFadeOut = () => {
  const [showBackground, setShowBackground] = useState(true);
  const [fadeOutComplete, setFadeOutComplete] = useState(false);

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

  return !fadeOutComplete ? (
    <div
      className={`flex flex-col items-center justify-center fixed inset-0 bg-black z-20 ${
        showBackground ? "" : "opacity-0 transition-opacity duration-1000"
      }`}
    >
      <h2 className="text-2xl text-white font-bold">
        {`"Like I don't even know what boxes are"`}
      </h2>
      <h1 className="text-6xl text-white font-bold mt-12">- SEAN O’NEILL</h1>
    </div>
  ) : null;
};

export default LandingFadeOut;
