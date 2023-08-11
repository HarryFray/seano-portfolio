import { StateCreator } from "zustand";

export interface ProductSlice {
  currentBackground: string;
  setcurrentBackground: (product: string) => void;
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
  currentBackground: "",
  setcurrentBackground: (background) => set({ currentBackground: background }),
});
