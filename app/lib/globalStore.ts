import create, { StateCreator } from "zustand";

export interface IProject {
  id: string;
  title: string;
  slug: string;
  projectVideo: string;
  prevProject: IProject;
  nextProject: IProject;
  projectRole: string;
  projectImageGallery: {
    responsiveImage: {
      src: string;
    };
  }[];
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

export interface GlobalState {
  curSelectedProject: IProject;
  setCurSelectedProject: (product: IProject) => void;
  prevSelectedProject: IProject;
  setPrevSelectedProject: (product: IProject) => void;
}

export const createGlobalState: StateCreator<GlobalState> = (set) => ({
  curSelectedProject: {} as IProject,
  setCurSelectedProject: (project) => set({ curSelectedProject: project }),
  prevSelectedProject: {} as IProject,
  setPrevSelectedProject: (project) => set({ prevSelectedProject: project }),
});

export const useAppStore = create<GlobalState>()((...a) => ({
  ...createGlobalState(...a),
}));
