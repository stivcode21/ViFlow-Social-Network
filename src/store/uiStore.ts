import { create } from "zustand";

interface CounterState {
  authModal: boolean; //estado para modal mobile de auth
  newPostModal: boolean; //estado para modal de nuevo post
  newCommentModal: boolean; //estado para modal de nuevo comentario
  selectedPost: number | null; //estado para id de post seleccionado
  setAuthModal: (authModal: boolean) => void;
  setNewPostModal: (postModal: boolean) => void;
  setNewCommentModal: (commentModal: boolean) => void;
  setSelectedPost: (postId: number) => void;
}

//estados globales de la app en general
export const useIuStore = create<CounterState>((set) => ({
  authModal: false,
  newPostModal: false,
  newCommentModal: false,
  selectedPost: null,
  setAuthModal: (authModal: boolean) => set({ authModal }),
  setNewPostModal: (newPostModal: boolean) => set({ newPostModal }),
  setNewCommentModal: (newCommentModal: boolean) => set({ newCommentModal }),
  setSelectedPost: (postId: number) => set({ selectedPost: postId }),
}));
