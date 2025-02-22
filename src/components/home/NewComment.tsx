import { XMarkIcon } from "@heroicons/react/24/solid";

interface CommentProps {
  toggleModalComment: () => void;
  commentData: {
    img?: string;
    name?: string;
    time?: string;
    post?: string;
    comments?: commentType[];
  };
}

interface commentType {
  id?: number;
  img?: string;
  name?: string;
  post?: string;
  time?: string;
}

const NewComment: React.FC<CommentProps> = ({
  commentData,
  toggleModalComment,
}) => {
  return (
    <div className="w-full h-full fixed top-0 bg-black/80 z-50 transition-all ease-in-out flex items-center justify-center">
      {/* modal */}
      <div className="modal-content bg-[#181818] border border-style h-auto rounded-2xl w-[95%] md:w-[52%] lg:w-[35%]">
        <header className="relative w-full px-4 py-2 border-b border-style flex justify-center ">
          <h1 className="font-semibold">Respuesta</h1>
          <button
            onClick={toggleModalComment}
            className="absolute left-4 top-2"
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
        </header>
        {/* container scroll */}
        <div className="px-4 py-4 overflow-y-scroll h-auto max-h-[350px] [&::-webkit-scrollbar]:hidden ">
          <div className="flex items-start gap-2 text-sm mb-4">
            <img
              src={commentData.img || "/userPreviu.webp"}
              alt="logo"
              className="w-9 h-9 object-contain rounded-full"
            />
            <div>
              <div className="flex gap-4">
                <p className="">{commentData.name}</p>
                <p className="text-[#aaaaaa] font-light">{commentData.time}</p>
              </div>
              <p className="text-[#ddd]">{commentData.post}</p>
            </div>
          </div>

          {/* comentarios */}
          {commentData.comments?.map((comment, i) => (
            <div className="border-l-2 border-style ml-4 pl-2 pb-4" key={i}>
              <div className=" flex items-start gap-2 text-sm">
                <img
                  src={comment.img || "/userPreviu.webp"}
                  alt="logo"
                  className="w-9 h-9 object-cover object-center rounded-full"
                />
                <div>
                  <div className="flex gap-4">
                    <p className="">{comment.name}</p>
                    <p className="text-[#aaaaaa] font-light">{comment.time}</p>
                  </div>
                  <p className="text-[#ddd]">{comment.post}</p>
                </div>
              </div>
              <div className="flex text-xs ml-11 text-[#aaa] gap-4 mt-1">
                <p>Me gusta</p>
                <p>Responder</p>
              </div>
            </div>
          ))}

          {/* nuevo comentario */}
        </div>
        <div className="flex items-center justify-center px-6 pt-1 pb-4">
          <input
            type="text"
            placeholder="Escribe algo..."
            className="w-full p-2 text-white font-extralight outline-none"
            autoFocus
          />
          <button className="px-4 py-1 border border-style rounded-xl shadow button-theme">
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
