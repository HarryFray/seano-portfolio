import create, { StateCreator } from "zustand";

export interface ProductSlice {
  currentBackground: number;
  setCurrentBackground: (product: number) => void;
}

export const globalStateSlice: StateCreator<ProductSlice> = (set) => ({
  currentBackground: 0,
  setCurrentBackground: (background) => {
    return set({ currentBackground: background });
  },
});

export const useAppStore = create<ProductSlice>()((...a) => ({
  ...globalStateSlice(...a),
}));
