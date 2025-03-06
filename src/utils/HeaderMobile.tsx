import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useIuStore } from "../store/uiStore";

const HeaderMobile: React.FC = () => {
  const { setMenuMobileModal } = useIuStore();

  return (
    <nav className="w-full padding-x h-14 p-2 z-30 fixed md:hidden blur-effect-theme text-white flex justify-center items-center top-0 left-0">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="logo"
        className="w-10 h-10 object-contain hover:scale-105 transition-all ease-in-out"
      />
      {/* Menu icon */}
      <div
        onClick={() => setMenuMobileModal(true)}
        className="p-2 text-[#888] hover:text-white absolute top-1 right-4"
      >
        <Bars3BottomRightIcon className="w-8 h-8 mb-2" />
      </div>
    </nav>
  );
};

export default HeaderMobile;
