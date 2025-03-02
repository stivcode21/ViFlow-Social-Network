import {
  BellIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import { useUserStore } from "../../store/userStore";
import ImgProfile from "../../utils/ImgProfile";

const InfoUser: React.FC = () => {
  const { logoState, nameState, infoState } = useUserStore();
  return (
    <div className="padding-x mt-10 md:mt-0">
      <div className="pt-6 pb-2 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Stiven Smith</h1>
          <h2 className="font-semibold text-[#ccc]">{nameState}</h2>
        </div>
        <div className="w-24 h-24">
          <ImgProfile img={logoState} ifExist={true} />
        </div>
      </div>
      <h3 className="text-[#ddd] mb-1">{infoState}</h3>
      <div className="flex items-center justify-between">
        <p className="h-fit w-fit text-[#666] hover:underline cursor-pointer">
          1.000<span>{` seguidores`}</span>
        </p>
        <div className="flex gap-2">
          <BellIcon className="w-7 h-7" />
          <EllipsisHorizontalCircleIcon className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
