import { create } from "zustand";

// Estado global para manejar los datos del usuario

interface UserState {
  nameState: string;
  infoState: string;
  logoState: string;
  setNameState: (newName: string) => void;
  setInfoState: (newInfo: string) => void;
  setLogoState: (newLogo: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  //estados iniciales
  nameState: localStorage.getItem("userName") || "",
  infoState: localStorage.getItem("userInfo") || "",
  logoState: localStorage.getItem("userImage") || "",
  // funciones de seteo, Guardar cambios en localStorage
  setNameState: (newName: string) => {
    localStorage.setItem("userName", newName);
    set({ nameState: newName });
  },
  setInfoState: (newInfo: string) => {
    localStorage.setItem("userInfo", newInfo);
    set({ infoState: newInfo });
  },
  setLogoState: (newLogo: string) => {
    localStorage.setItem("userImage", newLogo);
    set({ logoState: newLogo });
  },
}));
