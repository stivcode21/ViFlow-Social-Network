import {
  Bars3CenterLeftIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import FormModalLayout from "../../layouts/FormModalLayout";
import { useIuStore } from "../../store/uiStore";
import { useUserStore } from "../../store/userStore";
import { addToPost, PostType } from "../../data/data";
import { useState } from "react";

const NewPostModal: React.FC = () => {
  const [postState, setPostState] = useState<string>("");

  //estados globales
  const { setNewPostModal } = useIuStore();
  const { nameState, logoState } = useUserStore();

  const handleToPost = () => {
    const post: PostType = {
      id: 1, // Se actualizará al añadirlo
      img: logoState,
      name: nameState,
      post: postState,
      time: "Justo ahora",
    };
    addToPost(post);
    setPostState("");
    setNewPostModal(false);
  };

  return (
    <FormModalLayout>
      {/* Header */}
      <header className="relative w-full px-4 py-2 border-b border-style flex justify-center ">
        <h1 className="font-semibold">Nuevo Hilo</h1>
        <button
          onClick={() => setNewPostModal(false)}
          className="absolute left-4 top-2"
        >
          <XMarkIcon className="w-7 h-7" />
        </button>
      </header>
      <div className="mx-6 my-4 relative">
        <div className="flex items-center gap-2 text-sm">
          <img
            src={logoState || "/userPreviu.webp"}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <div className="w-full">
            <p className="text-[16px]">{nameState}</p>
            <input
              type="text"
              autoFocus
              value={postState}
              onChange={(e) => setPostState(e.target.value)}
              placeholder="¿Qué novedades tienes?"
              className="w-full text-white font-extralight text-sm outline-none"
            />
          </div>
        </div>
        <ul className="ml-4 pl-6 pb-2 border-l-3 border-style mt-2 flex gap-4 text-[#888] transition-all ease-in-out">
          <li className="cursor-pointer hover:text-white">
            <Bars3CenterLeftIcon className="w-5 h-5" />
          </li>
          <li className="cursor-pointer hover:text-white">
            <PhotoIcon className="w-5 h-5" />
          </li>
        </ul>
        <div className="flex gap-2 ml-1 mt-2 items-center">
          <img
            src={logoState || "/userPreviu.webp"}
            alt="logo"
            className="w-6 h-6 object-contain rounded-full opacity-50"
          />
          <p className="text-[#555] text-xs">Agregar a hilo</p>
        </div>
        <button
          onClick={handleToPost}
          className="px-4 py-1 border border-style rounded-xl shadow button-theme absolute bottom-0 right-0"
        >
          Publicar
        </button>
      </div>
    </FormModalLayout>
  );
};

export default NewPostModal;
