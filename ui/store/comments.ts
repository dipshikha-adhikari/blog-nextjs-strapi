import { IComment } from "@/types";
import { create } from "zustand";

export interface CommentsStore {
  comments: IComment[];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setComments: (comments: any) => void;
}

export const useComments = create<CommentsStore>((set) => ({
  comments: [],
  setComments: (comments) => set({ comments }),
}));
