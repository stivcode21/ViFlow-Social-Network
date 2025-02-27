import { PlusIcon } from "@heroicons/react/24/solid";

interface imgProps {
  id?: number;
  img?: string;
  ifExist?: boolean;
}

const ImgProfile: React.FC<imgProps> = ({ img, id, ifExist }) => {
  return (
    <div className="relative">
      <img
        src={img || "/userPreviu.webp"}
        alt={`ProfileUser-${id}`}
        className="w-9 h-9 object-cover object-center rounded-full"
      />
      {!ifExist && (
        <div className="absolute -right-0.5 -bottom-0.5 p-0.5 bg-white rounded-full text-black hover:scale-105 active:scale-90 transition-all ease-in-out border border-black ">
          <PlusIcon className="w-3 h-3" stroke="black" strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
};

export default ImgProfile;
