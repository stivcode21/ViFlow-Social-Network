// import ImgProfile from "../../utils/ImgProfile";
import { useIuStore } from "../../store/uiStore";
import { useUserStore } from "../../store/userStore";

const NewPostHeader: React.FC = () => {
  const { logoState } = useUserStore();
  // console.log("Logo State:", logoState);
  const { setNewPostModal } = useIuStore();

  return (
    <header className="padding-x mt-2 py-4 border-b border-style hidden md:flex items-center w-full gap-2">
      <img
        src={logoState || "/userPreviu.webp"}
        alt={`ProfileUser`}
        className="w-9 h-9 object-cover object-center rounded-full"
      />
      <input
        type="text"
        onClick={() => setNewPostModal(true)}
        placeholder="¿Qué novedades tienes?"
        className="w-full p-2 text-white font-extralight text-sm outline-none"
      />
      <button
        onClick={() => setNewPostModal(true)}
        className="padding-x py-2 border border-style rounded-xl shadow button-theme"
      >
        Publicar
      </button>
    </header>
  );
};

export default NewPostHeader;
