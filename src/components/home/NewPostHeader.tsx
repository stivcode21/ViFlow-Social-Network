// import ImgProfile from "../../utils/ImgProfile";
import { useIuStore } from "../../store/uiStore";
import { useUserStore } from "../../store/userStore";

interface postHeaderProps {
  ifExist?: boolean;
}

const NewPostHeader: React.FC<postHeaderProps> = ({ ifExist }) => {
  const { logoState } = useUserStore();
  // console.log("Logo State:", logoState);
  const { setNewPostModal } = useIuStore();

  return (
    <header
      className={`${
        ifExist ? "none py-3 flex " : "hidden md:flex mt-2 py-4"
      } padding-x border-b border-style items-center w-full gap-2`}
    >
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
        className="padding-x py-1.5 border border-style rounded-xl shadow button-theme"
      >
        Publicar
      </button>
    </header>
  );
};

export default NewPostHeader;
