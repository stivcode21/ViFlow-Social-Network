import { create } from "zustand";

interface CounterState {
  authModal: boolean;
  setAuthModal: (authModal: boolean) => void;
}

export const useIuStore = create<CounterState>((set) => ({
  authModal: false,
  setAuthModal: (authModal: boolean) => set({ authModal }),
}));
