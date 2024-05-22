import { create } from "zustand";

export interface CategoriesStore {
  categories: [];
  setCategories: (props: any) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  setCategories: (props) => set((state) => ({ ...state, categories: props })),
}));
