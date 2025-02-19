import {
  Bars3BottomLeftIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full lg:w-16 h-16 lg:h-full fixed bg-black text-white flex lg:flex-col justify-center lg:justify-between items-center  bottom-0 left-0 p-2">
      <img
        src="/logo.png"
        alt="logo"
        className="w-10 h-10 object-contain hidden lg:block"
      />
      <ul className="flex lg:flex-col gap-4">
        <li>
          <HomeIcon className="w-10 h-10" />
        </li>
        <li>
          <MagnifyingGlassIcon className="w-10 h-10" />
        </li>
        <li>
          <PlusIcon className="w-10 h-10" />
        </li>
        <li>
          <HeartIcon className="w-10 h-10" />
        </li>
        <li>
          <UserIcon className="w-10 h-10" />
        </li>
      </ul>
      <Bars3BottomLeftIcon className="w-10 h-10 hidden lg:block" />
    </nav>
  );
};

export default Navbar;
