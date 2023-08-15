import { StateCreator, create } from "zustand";

export interface Project {
  id: string;
  title: string;
  slug: string;
  projectVideo: string;
  prevProject: Project;
  nextProject: Project;
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
  curSelectedProject: Project;
  prevSelectedProject: Project;
  allProjects: Project[];
  globalLoading: boolean;
  setCurSelectedProject: (product: Project) => void;
  setAllProjects: (projects: Project[]) => void;
  setGlobalLoading: (loading: boolean) => void;
}

const initialState = {
  curSelectedProject: {} as Project,
  prevSelectedProject: {} as Project,
  allProjects: [] as Project[],
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
  setAllProjects: (projects: Project[]) => {
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
