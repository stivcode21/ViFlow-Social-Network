import { useIuStore } from "../store/uiStore";

interface menuProp {
  ifMobile?: boolean;
}

const ModalMenu: React.FC<menuProp> = ({ ifMobile }) => {
  //estados globales
  const { setMenuDestokModal, setMenuMobileModal } = useIuStore();

  const handleMenu = () => {
    setMenuDestokModal(false);
    setMenuMobileModal(false);
  };

  return (
    <div className="w-full h-full">
      <div
        onClick={handleMenu}
        className="w-full h-full absolute top-0 right-0 z-30 bg-transparent"
      ></div>
      <div
        className={` ${ifMobile ? "top-10 right-4" : "bottom-8 left-14"}
        fixed modal-content flex items-center justify-center z-50 bg-[#181818] border border-[#2C2D2D] rounded-2xl p-4`}
      >
        <ul className="text-sm text-left">
          <li className="py-4 pl-2 pr-6 rounded-2xl cursor-pointer hover:bg-[#202020]">
            Configuración
          </li>
          <div className="border-b border-[#2C2D2D] my-2"></div>
          <li className="py-4 pl-2 pr-6 rounded-2xl cursor-pointer hover:bg-[#202020]">
            Reportar un problema
          </li>

          <li className="py-4 pl-2 pr-6 rounded-2xl text-red-500 cursor-pointer hover:bg-[#202020]">
            Cerrar sesión
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
