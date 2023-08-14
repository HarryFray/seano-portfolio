import { StateCreator, create } from "zustand";

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
}

export const createGlobalState: StateCreator<GlobalState> = (set) => ({
  curSelectedProject: {} as IProject,
  setCurSelectedProject: (project) => {
    return set((state) => ({
      prevSelectedProject: state.curSelectedProject,
      curSelectedProject: project,
    }));
  },
  prevSelectedProject: {} as IProject,
});

export const useAppStore = create<GlobalState>()((...a) => ({
  ...createGlobalState(...a),
}));
