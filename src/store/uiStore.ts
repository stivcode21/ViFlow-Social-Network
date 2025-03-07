import { create } from "zustand";

interface CounterState {
  authModal: boolean; //estado para modal mobile de auth
  newPostModal: boolean; //estado para modal de nuevo post
  menuDestokModal: boolean; //estado para modal de menudestok
  menuMobileModal: boolean; //estado para modal de menuMobile
  optionsPostState: boolean; //estado para modal de options post
  newCommentModal: boolean; //estado para modal de nuevo comentario
  selectedPost: number | null; //estado para id de post seleccionado
  setAuthModal: (menuDestokModal: boolean) => void;
  setNewPostModal: (postModal: boolean) => void;
  setMenuDestokModal: (stateModal: boolean) => void;
  setMenuMobileModal: (stateModal: boolean) => void;
  setOptionsPostState: (optionsPostState: boolean) => void;
  setNewCommentModal: (commentModal: boolean) => void;
  setSelectedPost: (postId: number) => void;
}

//estados globales de la app en general
export const useIuStore = create<CounterState>((set) => ({
  authModal: false,
  newPostModal: false,
  menuDestokModal: false,
  menuMobileModal: false,
  optionsPostState: false,
  newCommentModal: false,
  selectedPost: null,
  setAuthModal: (authModal: boolean) => set({ authModal }),
  setNewPostModal: (newPostModal: boolean) => set({ newPostModal }),
  setMenuDestokModal: (menuDestokModal: boolean) => set({ menuDestokModal }),
  setMenuMobileModal: (menuMobileModal: boolean) => set({ menuMobileModal }),
  setOptionsPostState: (optionsPostState: boolean) => set({ optionsPostState }),
  setNewCommentModal: (newCommentModal: boolean) => set({ newCommentModal }),
  setSelectedPost: (postId: number) => set({ selectedPost: postId }),
}));
