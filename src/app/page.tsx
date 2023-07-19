"use client";
import Image from "next/image";

const VIDEOGRAPHY_PROJECTS = [
  {
    title: "Ethereal Elopement",
    path: "ethereal_elopement",
  },
  {
    title: "Pixelated Dreams",
    path: "pixelated_dreams",
  },
  {
    title: "Wanderlust Chronicles",
    path: "wanderlust_chronicles",
  },
  {
    title: "Rhythm of the Streets",
    path: "rhythm_of_the_streets",
  },
  {
    title: "Gadgetopia Unveiled",
    path: "gadgetopia_unveiled",
  },
  {
    title: "Voices of Change",
    path: "voices_of_change",
  },
  {
    title: "Runway Enchantment",
    path: "runway_enchantment",
  },
  {
    title: "Victory Symphony",
    path: "victory_symphony",
  },
];

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          {VIDEOGRAPHY_PROJECTS.map(({ title, path }, i) => {
            return (
              <h2
                className="text-base font-semibold hover:underline cursor-pointer"
                onClick={() => {
                  alert(`Navigate to ${path}`);
                }}
                key={`${path}${i}`}
              >
                {title}
              </h2>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
