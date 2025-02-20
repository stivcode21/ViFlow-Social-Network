import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const liked = false;

const Post: React.FC = () => {
  return (
    <section className="w-full h-auto px-6 border-b border-style">
      <div className="relative py-4">
        <div className="flex items-start gap-2 text-sm">
          <img
            src="/userPreviu.webp"
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <div>
            <div className="flex gap-4">
              <p className="">Stivcode21</p>
              <p className="text-[#aaaaaa] font-light">1 hora</p>
            </div>
            <p className="text-[#ddd]">Hola busco gente para charlar</p>
          </div>
        </div>
        {/* botones */}
        <ul className="ml-10 mt-3 flex gap-4">
          <li className="button-theme flex gap-1 items-center">
            <HeartIcon
              className={`w-6 h-6 ${
                liked ? "fill-red-500 stroke-red-500" : "fill-none text-white"
              }`}
            />
            <p className="text-xs text-[#ccc] ">22</p>
          </li>
          <li className="button-theme flex gap-1 items-center">
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
          </li>
          <li className="button-theme flex gap-1 items-center">
            <ArrowPathRoundedSquareIcon className="w-6 h-6" />
            <p className="text-xs text-[#ccc] ">2</p>
          </li>
          <li className="button-theme flex gap-1 items-center">
            <PaperAirplaneIcon className="w-5 h-5 -rotate-30" />
            <p className="text-xs text-[#ccc] ">3</p>
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
