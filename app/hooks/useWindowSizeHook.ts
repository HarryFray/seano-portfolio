import { useState, useEffect } from "react";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("sm");

  useEffect(() => {
    const breakpoints = {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    };

    const updateScreenSize = () => {
      if (window.matchMedia(`(min-width: ${breakpoints["2xl"]})`).matches) {
        setScreenSize("2xl");
      } else if (window.matchMedia(`(min-width: ${breakpoints.xl})`).matches) {
        setScreenSize("xl");
      } else if (window.matchMedia(`(min-width: ${breakpoints.lg})`).matches) {
        setScreenSize("lg");
      } else if (window.matchMedia(`(min-width: ${breakpoints.md})`).matches) {
        setScreenSize("md");
      } else if (window.matchMedia(`(min-width: ${breakpoints.sm})`).matches) {
        setScreenSize("sm");
      } else {
        setScreenSize("xs");
      }
    };

    updateScreenSize();

    const resizeHandler = () => {
      updateScreenSize();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
