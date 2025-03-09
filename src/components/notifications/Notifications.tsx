import ImgProfile from "../../utils/ImgProfile";
import FiltersNotifications from "./FiltersNotifications";

const notifications = [
  { username: "david_delazet", time: "1 sem" },
  { username: "leo_ramirezm", time: "1 sem" },
  { username: "dairon_tattoo6", time: "2 sem", followed: true },
  { username: "ferrinh0.jr", time: "5 sem" },
  { username: "la.s_222", time: "5 sem" },
  { username: "marcosss.sjr", time: "6 sem" },
  { username: "perex_780", time: "7 sem" },
  { username: "sofi_lope96", time: "7 sem" },
  { username: "alx_320", time: "7 sem" },
];

export default function Notifications() {
  return (
    <div className="w-full padding-x text-white py-4 rounded-lg mb-14 md:mb-0.5">
      {/* Barra de filtros */}
      <FiltersNotifications />

      {/* Lista de notificaciones */}
      <div className="mt-4">
        {notifications.map((notif, index) => (
          // contenedor
          <div className="w-full flex items-center gap-2 py-1">
            <div className="w-11 h-10">
              <ImgProfile ifExist={true} />
            </div>
            {/* info y boton */}
            <div
              key={index}
              className="w-full flex justify-between items-center border-b border-style p-3"
            >
              <div>
                <p className="text-sm font-semibold">{notif.username}</p>
                <p className="text-xs text-gray-400">
                  Comenzó a seguirte - {notif.time}
                </p>
              </div>
              <button
                className={`px-3 py-2 text-sm font-semibold rounded-lg button-theme ${
                  notif.followed
                    ? "border border-style text-[#808080]"
                    : "bg-white text-black"
                }`}
              >
                {notif.followed ? "Seguidos" : "Seguir también"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
