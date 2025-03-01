const NavbarProfile: React.FC = () => {
  return (
    <div className="w-full flex gap-2 border-b border-style">
      <button className="w-full padding-x py-1 border-b border-white shadow button-theme">
        Hilos
      </button>
      <button className="w-full padding-x py-1 shadow button-theme">
        Reposts
      </button>
    </div>
  );
};

export default NavbarProfile;
