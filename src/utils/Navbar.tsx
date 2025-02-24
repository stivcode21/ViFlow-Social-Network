import {
  Bars3BottomLeftIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  HeartIcon as HeartIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import { useIuStore } from "../store/uiStore";

const Navbar: React.FC = () => {
  const location = useLocation();
  const { setNewPostModal } = useIuStore();

  const btnStyle =
    "W-full h-full hover-fill text-[#888] hover:text-white px-7 sm:px-9 md:px-3 py-2 rounded-xl transition-all ease-in-out";

  const navItems1 = [
    { path: "/home", outline: HomeIcon, solid: HomeIconSolid },
    {
      path: "/search",
      outline: MagnifyingGlassIcon,
      solid: MagnifyingGlassIconSolid,
    },
  ];

  const navItems2 = [
    { path: "/activity", outline: HeartIcon, solid: HeartIconSolid },
    { path: "/user", outline: UserIcon, solid: UserIconSolid },
  ];

  return (
    <nav className="w-full md:w-16 h-14 p-2 md:h-full z-30 fixed blur-effect-theme text-white flex md:flex-col justify-center md:justify-between items-center bottom-0 left-0">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="logo"
        className="w-10 h-10 object-contain hidden md:block mt-2"
      />
      {/* Iconos */}
      <div className="w-full flex md:flex-col md:gap-4 justify-between items-center sm:mx-4 md:mx-0">
        {/* iconos home y search */}
        {navItems1.map(({ path, outline: OutlineIcon, solid: SolidIcon }) => {
          const isActive = location.pathname === path;
          return (
            <Link key={path} className={btnStyle} to={path}>
              {isActive ? (
                <SolidIcon className="w-8 h-8 text-white" />
              ) : (
                <OutlineIcon className="w-8 h-8" />
              )}
            </Link>
          );
        })}
        {/* botton modal post */}
        <Link
          to={"/home"}
          onClick={() => setNewPostModal(true)}
          className={`${btnStyle} bg-[rgb(23,23,23)] button-theme`}
        >
          <PlusIcon className="w-8 h-8 button-theme" />
        </Link>
        {/* iconos activity y perfil */}
        {navItems2.map(({ path, outline: OutlineIcon, solid: SolidIcon }) => {
          const isActive = location.pathname === path;
          return (
            <Link key={path} className={btnStyle} to={path}>
              {isActive ? (
                <SolidIcon className="w-8 h-8 text-white" />
              ) : (
                <OutlineIcon className="w-8 h-8" />
              )}
            </Link>
          );
        })}
      </div>
      {/* Menu icon */}
      <div className="p-2 text-[#888] hover:text-white hidden md:block">
        <Bars3BottomLeftIcon className="w-8 h-8 mb-2" />
      </div>
    </nav>
  );
};

export default Navbar;
