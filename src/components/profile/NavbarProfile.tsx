interface NavbarProps {
  navbarState: boolean;
  toggleNavbar: (state: boolean) => void;
}

const NavbarProfile: React.FC<NavbarProps> = ({
  navbarState,
  toggleNavbar,
}) => {
  const active = "text-white border-b border-white cursor-pointer";
  const inactive = "text-[#aaa] hover:text-white cursor-pointer";

  return (
    <div className="w-full flex border-b border-style">
      <button
        onClick={() => toggleNavbar(false)}
        className={`${
          navbarState ? inactive : active
        } w-full padding-x py-1 shadow button-theme`}
      >
        Hilos
      </button>
      <button
        onClick={() => toggleNavbar(true)}
        className={`${
          navbarState ? active : inactive
        } w-full padding-x py-1 shadow button-theme`}
      >
        Reposts
      </button>
    </div>
  );
};

export default NavbarProfile;
