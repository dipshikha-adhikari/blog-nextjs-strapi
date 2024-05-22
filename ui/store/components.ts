import { create } from "zustand";

export interface ComponentsStore {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (props: any) => void;
}

export const useComponentsStore = create<ComponentsStore>((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: (props) =>
    set((state) => ({ ...state, isSidebarOpen: props })),
}));
