import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";

interface PostProps {
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

  return (
    <section className="w-full h-auto px-6 border-b border-style">
      <div className="relative py-4">
        <div className="flex items-start gap-2 text-sm">
          <img
            src={img || "/userPreviu.webp"}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <div>
            <div className="flex gap-4">
              <p className="">{name}</p>
              <p className="text-[#aaaaaa] font-light">{time}</p>
            </div>
            <p className="text-[#ddd]">{post}</p>
          </div>
        </div>
        {/* botones */}
        <ul className="ml-10 mt-3 flex gap-4">
          <li
            onClick={handleLiked}
            className="button-theme flex gap-1 items-center"
          >
            <HeartIcon
              className={`w-6 h-6 ${
                liked ? "fill-red-500 stroke-red-500" : "fill-none text-white"
              }`}
            />
            <p className="text-xs text-[#ccc] ">
              {localLikes > 0 ? localLikes : ""}
            </p>
          </li>

          <li
            onClick={toggleModalComment}
            className="button-theme flex gap-1 items-center"
          >
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
            <p className="text-xs text-[#ccc] ">{amountComments}</p>
          </li>

          <li className="button-theme flex gap-1 items-center">
            <ArrowPathRoundedSquareIcon className="w-6 h-6" />
            <p className="text-xs text-[#ccc] ">{amountRepost}</p>
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
