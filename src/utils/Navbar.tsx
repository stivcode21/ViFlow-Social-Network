import {
  Bars3BottomLeftIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

const btnStyle =
  "W-full h-full hover:bg-[#171717] text-[#888] hover:text-white px-7 sm:px-9 md:px-3 py-2 rounded-xl transition-all ease-in-out";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full md:w-16 h-14 p-2 md:h-full fixed blur-effect-theme text-white flex md:flex-col justify-center md:justify-between items-center  bottom-0 left-0">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="logo"
        className="w-10 h-10 object-contain hidden md:block mt-2"
      />
      {/* Iconos */}
      <div className="w-full flex md:flex-col md:gap-4 justify-between items-center sm:mx-4 md:mx-0">
        <Link className={`${btnStyle}`} to={"/home"}>
          <HomeIcon className="w-8 h-8" />
        </Link>
        <Link className={`${btnStyle}`} to={"/search"}>
          <MagnifyingGlassIcon className="w-8 h-8" />
        </Link>
        <div className={`${btnStyle} bg-[#171717] text-white`}>
          <PlusIcon className="w-8 h-8" />
        </div>
        <Link className={`${btnStyle}`} to={"/activity"}>
          <HeartIcon className="w-8 h-8" />
        </Link>
        <Link className={`${btnStyle}`} to={"/user"}>
          <UserIcon className="w-8 h-8" />
        </Link>
      </div>
      {/* Menu icon */}
      <div className="p-2 text-[#888] hover:text-white hidden md:block">
        <Bars3BottomLeftIcon className="w-8 h-8 mb-2" />
      </div>
    </nav>
  );
};

export default Navbar;
