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
  prevSelectedProject: IProject;
  allProjects: IProject[];
  globalLoading: boolean;
  setCurSelectedProject: (product: IProject) => void;
  setAllProjects: (projects: IProject[]) => void;
  setGlobalLoading: (loading: boolean) => void;
}

const initialState = {
  curSelectedProject: {} as IProject,
  prevSelectedProject: {} as IProject,
  allProjects: [] as IProject[],
  globalLoading: true,
};

export const createGlobalState: StateCreator<GlobalState> = (set) => ({
  ...initialState,
  setCurSelectedProject: (project) => {
    return set((state) => ({
      prevSelectedProject: state.curSelectedProject,
      curSelectedProject: project,
    }));
  },
  setAllProjects: (projects: IProject[]) => {
    return set(() => ({
      allProjects: projects,
    }));
  },
  setGlobalLoading: (loading: boolean) => {
    return set(() => ({
      globalLoading: loading,
    }));
  },
});

export const useAppStore = create<GlobalState>()((...a) => ({
  ...createGlobalState(...a),
}));
