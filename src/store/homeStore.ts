import { create } from "zustand";

// Estado global para manejar los likes

interface LikeState {
  countLikes: number; // Contador
  setCountLikes: (currentLikes: number, isLiked: boolean) => void;
}

export const useLikeStore = create<LikeState>((set) => ({
  countLikes: 0, // Inicialmente nulo hasta que se pase un valor
  setCountLikes: (currentLikes, isLiked) =>
    set(() => ({
      countLikes: isLiked ? currentLikes - 1 : currentLikes + 1,
    })),
}));
