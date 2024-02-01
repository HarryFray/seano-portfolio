import Link from "next/link";
import useScreenSize from "../hooks/useWindowSizeHook";

const RootLayout = () => {
  const screenSize = useScreenSize();

  const isMobileScreenSize = screenSize === "xs" || screenSize === "sm";

  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="text-2xl font-bold text-white hover:line-through
      md:text-4xl md:w-auto md:flex items-center w-full"
      >
        SEANO
        <br className="xl:hidden" />
      </Link>
      {!isMobileScreenSize && (
        <span className="text-md pl-3 text-white font-light">
          Director & Cinematographer
        </span>
      )}
    </div>
  );
};

export default RootLayout;
