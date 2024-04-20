import Link from "next/link";
import useScreenSize from "../hooks/useWindowSizeHook";
// TODO: WORK WITH SEAN IF WANT COOLER LOGO...
// import Image from "next/image";

const RootLayout = () => {
  const screenSize = useScreenSize();

  const isMobileScreenSize = screenSize === "xs" || screenSize === "sm";

  return (
    <div className="flex items-center">
      {/* <div className="w-20 h-20">
        <Image
          src="/Asset 9.png" // Assuming Asset 9.png is located in the public directory
          alt="logo"
          layout="responsive"
          width={80} // Adjust width and height according to your requirements
          height={80}
        />
      </div> */}
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
