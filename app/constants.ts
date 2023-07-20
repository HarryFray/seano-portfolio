export interface IProject {
  title: string;
  id: string;
  slug: string;
  landingBackground: {
    responsiveImage: {
      src: string;
      base64: string;
    };
  };
  landingGif: {
    responsiveImage: {
      src: string;
      base64: string;
    };
  };
}
