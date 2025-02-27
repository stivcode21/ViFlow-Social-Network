import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";
import ImgProfile from "../../utils/ImgProfile";

interface PostProps {
  id: number;
  img?: string;
  post: ReactNode;
  name: string;
  time: string;
  amountLike?: number;
  amountComments?: number;
  amountRepost?: number;
  toggleModalComment: () => void;
}

const Post: React.FC<PostProps> = ({
  id,
  img,
  post,
  name,
  time,
  amountLike,
  amountComments,
  amountRepost,
  toggleModalComment,
}) => {
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(amountLike ?? 0);

  //accion del boton de like
  const handleLiked = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    setLocalLikes((prev) => (newLikedState ? prev + 1 : prev - 1));
  };

  const btnStyle =
    "flex items-center button-theme justify-center gap-x-1 text-[#ccc] hover:text-white rounded-2xl transition-all ease-in-out p-1 hover:bg-[#202020] cursor-pointer  hover:scale-105 active:scale-90 ";

  return (
    <section className="w-full h-auto px-6 border-b border-style">
      <div className="relative pt-4 pb-2">
        <div className="flex items-start gap-2 text-sm">
          <ImgProfile id={id} img={img} />
          <div>
            <div className="flex gap-4">
              <p className="">{name}</p>
              <p className="text-[#aaaaaa] font-light">{time}</p>
            </div>
            <p className="text-[#ddd]">{post}</p>
          </div>
        </div>
        {/* botones */}
        <ul className="ml-10 mt-2 flex gap-4 transition-all ease-in-out">
          <li className={`${btnStyle}`} onClick={handleLiked}>
            <HeartIcon
              className={`w-6 h-6 ${
                liked ? "fill-red-500 stroke-red-500" : "fill-none text-white"
              }`}
            />
            <p className="text-xs ">{localLikes > 0 ? localLikes : ""}</p>
          </li>

          <li className={`${btnStyle}`} onClick={toggleModalComment}>
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
            <p className="text-xs">{amountComments}</p>
          </li>

          <li className={`${btnStyle}`}>
            <ArrowPathRoundedSquareIcon className="w-6 h-6" />
            <p className="text-xs">{amountRepost}</p>
          </li>
        </ul>

        <button className="button-theme absolute top-3 right-0">
          <EllipsisHorizontalIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Post;
