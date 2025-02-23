import { create } from "zustand";

interface CounterState {
  authModal: boolean;
  newPostModal: boolean;
  setAuthModal: (authModal: boolean) => void;
  setNewPostModal: (postModal: boolean) => void;
}

//estado para auth
export const useIuStore = create<CounterState>((set) => ({
  authModal: false,
  newPostModal: false,
  setAuthModal: (authModal: boolean) => set({ authModal }),
  setNewPostModal: (newPostModal: boolean) => set({ newPostModal }),
}));
