import {
  BookmarkIcon,
  EyeSlashIcon,
  LinkIcon,
  SpeakerXMarkIcon,
  FlagIcon,
  UserMinusIcon,
} from "@heroicons/react/24/outline";

const OptionsPostModal: React.FC = () => {
  return (
    <div className="z-50 text-left">
      {/*cerrar modal */}
      <div className="w-full h-full absolute top-0 right-0 z-50 bg-transparent"></div>
      {/* Modal */}
      <div className="modal-content absolute right-8 w-56 mt-2 bg-[#181818] border border-style text-white divide-y divide-gray-600 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="p-2 space-y-2">
          <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-[#202020]">
            <BookmarkIcon className="w-5 h-5 mr-2" /> Guardar
          </button>
          <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-[#202020]">
            <EyeSlashIcon className="w-5 h-5 mr-2" /> No me interesa
          </button>
          <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-[#202020]">
            <SpeakerXMarkIcon className="w-5 h-5 mr-2" /> Silenciar
          </button>
          <button className="flex items-center w-full px-4 py-2 text-red-500 rounbg-ded-lg hover:bg-[#202020]">
            <UserMinusIcon className="w-5 h-5 mr-2" /> Bloquear
          </button>
          <button className="flex items-center w-full px-4 py-2 text-red-500 rounded-lg hover:bg-[#202020]">
            <FlagIcon className="w-5 h-5 mr-2" /> Reportar
          </button>
          <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-[#202020]">
            <LinkIcon className="w-5 h-5 mr-2" /> Copiar enlace
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionsPostModal;
