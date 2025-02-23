import {
  InformationCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

const CreateProfile: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Obtenemos el primer archivo seleccionado
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-10">
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
      <form className="w-full flex flex-col gap-10">
        <div>
          <div className="relative">
            <UserCircleIcon className="w-6 h-6 absolute bottom-2 left-0 text-[#6363FF]" />
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-2 text-white pl-8  border-b-2 border-style outline-none"
              //   value={newComment}
              //   onChange={(e) => setNewComment(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div className="relative">
            <InformationCircleIcon className="w-6 h-6 absolute bottom-2 left-0 text-[#6363FF]" />
            <input
              type="text"
              placeholder="¡Hey, estoy usando ViFlow!"
              className="w-full p-2 text-white border-b-2 pl-8 border-style outline-none mt-4"
              //   value={newComment}
              //   onChange={(e) => setNewComment(e.target.value)}
              autoFocus
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
