import Link from "next/link";

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
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">SeanO Portfolio</h1>
      </div>
      <div className="p-24">
        <div className="w-fit flex flex-col">
          {VIDEOGRAPHY_PROJECTS.map(({ title, path }, i) => {
            return (
              <Link
                className="w-fit text-base font-semibold hover:underline cursor-pointer"
                key={`${path}${i}`}
                href={`/seano-proj/${path}`}
              >
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
