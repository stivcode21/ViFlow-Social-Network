import { useState } from "react";

const filters = ["Seguimientos", "Respuestas", "Menciones", "Reposts"];

const FiltersNotifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Seguimientos");

  return (
    <div className="flex justify-center md:justify-start items-center gap-1 md:gap-2 border-b-2 border-style pt-2 pb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-3 py-1 rounded-full transition ${
            activeFilter === filter
              ? "bg-white text-black"
              : "border border-style text-gray-300"
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FiltersNotifications;
