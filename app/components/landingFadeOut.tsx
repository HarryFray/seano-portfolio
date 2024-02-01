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
      className={`p-8 flex flex-col items-center justify-center fixed inset-0 bg-black z-20 ${
        showBackground ? "" : "opacity-0 transition-opacity duration-1000"
      }`}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-6 sm:mt-10 md:mt-12 text-center">
        SEANO
      </h1>
    </div>
  ) : null;
};

export default LandingFadeOut;
