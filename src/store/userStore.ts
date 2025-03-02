import { create } from "zustand";

// Estado global para manejar los datos del usuario

interface UserState {
  userNameState: string;
  fullNameState: string;
  infoState: string;
  logoState: string;
  setUserNameState: (newName: string) => void;
  setFullNameState: (fullName: string) => void;
  setInfoState: (newInfo: string) => void;
  setLogoState: (newLogo: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  //estados iniciales
  userNameState: localStorage.getItem("userName") || "",
  fullNameState: localStorage.getItem("userFullName") || "",
  infoState: localStorage.getItem("userInfo") || "",
  logoState: localStorage.getItem("userImage") || "",
  // funciones de seteo, Guardar cambios en localStorage
  setUserNameState: (newName: string) => {
    localStorage.setItem("userName", newName);
    set({ userNameState: newName });
  },

  setFullNameState: (fullName: string) => {
    localStorage.setItem("userFullName", fullName);
    set({ fullNameState: fullName });
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
