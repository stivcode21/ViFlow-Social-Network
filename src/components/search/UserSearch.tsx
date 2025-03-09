import ImgProfile from "../../utils/ImgProfile";
import BarSearch from "./BarSearch";

const users = [
  {
    username: "dani3palacios",
    name: "DANI 3PALACIOS “El Tripas”",
    bio: "Mi nuevo canal de youtube\nActividad Paranormal con Dani 3Palacios",
    followers: "86,1 mil seguidores",
  },
  {
    username: "neymarjr",
    name: "Neymar Jr",
    bio: "Isaías 54:17 🙏",
    followers: "21,3 mill. seguidores",
  },
  {
    username: "ladino95812",
    name: "Ladino Dahiana",
    bio: "",
    followers: "3 seguidores",
  },
  {
    username: "mariana_alvarez0",
    name: "Mariana Alvarez",
    bio: "",
    followers: "33 seguidores",
  },
  {
    username: "jamesrodriguez10",
    name: "James Rodríguez",
    bio: "colombia",
    followers: "7,3 mill. seguidores",
  },
  {
    username: "juanF_31",
    name: "Juan Felipe",
    bio: "condenado al exito",
    followers: "2 mil seguidores",
  },
];

const UserSearch: React.FC = () => {
  return (
    <div className="w-full padding-x py-6 text-white rounded-lg mb-14 md:mb-0.5">
      <BarSearch />

      {/* Lista de usuarios sugeridos */}
      <div>
        <div className="mt-2">
          {users.map((user, index) => (
            <div className="w-full flex items-start gap-4">
              <div className="w-11 h-10 mt-5">
                <ImgProfile ifExist={true} />
              </div>
              <div
                key={index}
                className="w-full flex items-center py-4 border-b border-style justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{user.username}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{user.name}</p>
                  {user.bio && (
                    <p className="text-gray-500 text-xs">{user.bio}</p>
                  )}
                  <p className="text-gray-500 text-xs">{user.followers}</p>
                </div>
                <button className="bg-white text-black button-theme px-3 py-1 rounded-full text-sm font-semibold">
                  Seguir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
