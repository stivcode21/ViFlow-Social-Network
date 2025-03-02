import React, { useRef, useState } from "react";
import {
  CheckBadgeIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";

const CreateProfile: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [newName, setNewName] = useState<string>("");
  const [newFullName, setNewFullName] = useState<string>("");
  const [newInfo, setNewInfo] = useState<string>("");

  const { setUserNameState, setFullNameState, setInfoState, setLogoState } =
    useUserStore(); //estados globales
  const navigate = useNavigate(); //variable de navegacion

  const handleSubmit = () => {
    setUserNameState(newName);
    localStorage.setItem("userName", newName);
    setFullNameState(newFullName);
    localStorage.setItem("userFullName", newFullName);
    setInfoState(newInfo);
    localStorage.setItem("userInfo", newInfo);
    navigate("/home");
  };

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLogoState(base64String);
        localStorage.setItem("userImage", base64String); // Guardar en localStorage
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-10">
      {/* Cambio de imagen de perfil */}
      <div onClick={handleImageClick} className="mt-8 cursor-pointer relative">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            className="border-2 border-[#6363FF] shadow-sm shadow-black w-[150px] h-[150px] rounded-full object-cover"
            alt="foto de perfil"
          />
        ) : (
          <img
            src="/userPreviu.webp"
            className="border-2 border-[#6363FF] shadow-sm shadow-black w-[150px] h-[150px] rounded-full object-cover"
            alt="avatar Placeholder"
          />
        )}
        <input
          type="file"
          name="foto"
          id="foto"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <button className="absolute -bottom-2 p-2 rounded-full bg-white right-3 border border-[#6363FF] hover:scale-105 transition-all ease-in-out shadow-sm shadow-black">
          <PencilIcon className="w-6 h-6 text-[#6363FF]" />
        </button>
      </div>
      {/*Campos de informacion */}
      <form className="w-full flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <CheckBadgeIcon className="w-6 h-6 absolute bottom-2.5 left-0 text-[#6363FF]" />
            <input
              type="text"
              placeholder="Tu userName"
              className="w-full p-2 text-white pl-8  border-b-2 border-style outline-none"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div className="relative">
            <UserCircleIcon className="w-6 h-6 absolute bottom-2.5 left-0 text-[#6363FF]" />
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-2 text-white pl-8  border-b-2 border-style outline-none"
              value={newFullName}
              onChange={(e) => setNewFullName(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div className="relative">
            <InformationCircleIcon className="w-6 h-6 absolute bottom-2.5 left-0 text-[#6363FF]" />
            <input
              type="text"
              placeholder="¡Hey, estoy usando ViFlow!"
              className="w-full p-2 text-white border-b-2 pl-8 border-style outline-none"
              value={newInfo}
              onChange={(e) => setNewInfo(e.target.value)}
              autoFocus
              required
            />
          </div>
        </div>
        {/* boton de envio */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
