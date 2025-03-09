import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const BarSearch: React.FC = () => {
  return (
    <>
      {/* Barra de búsqueda */}
      <div className="relative flex items-center bg-black rounded-xl border border-style px-4 py-2">
        <MagnifyingGlassIcon className="w-7 h-7 text-[#2C2D2D]" />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent flex-1 px-2 focus:outline-none text-white"
        />
      </div>
      <h2 className="text-gray-400 text-sm mt-1 mb-6">
        Sugerencias de cuentas para seguir
      </h2>
    </>
  );
};

export default BarSearch;
