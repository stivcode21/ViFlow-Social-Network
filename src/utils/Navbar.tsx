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
  "W-full h-full hover:bg-[#171717] text-[#888] hover:text-white px-6 py-2 lg:px-3 rounded-xl transition-all ease-in-out";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full lg:w-16 h-14 p-2 lg:h-full fixed blur-effect-theme text-white flex lg:flex-col justify-center lg:justify-between items-center  bottom-0 left-0">
      <img
        src="/logo.png"
        alt="logo"
        className="w-10 h-10 object-contain hidden lg:block mt-2"
      />
      <div className="flex lg:flex-col gap-4">
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
      <div className="p-2 text-[#888] hover:text-white ">
        <Bars3BottomLeftIcon className="w-8 h-8 hidden lg:block mb-2" />
      </div>
    </nav>
  );
};

export default Navbar;
