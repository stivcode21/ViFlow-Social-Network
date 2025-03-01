import { XMarkIcon } from "@heroicons/react/24/solid";
import { CommentType } from "../../data/data";
import FormModalLayout from "../../layouts/FormModalLayout";
import ImgProfile from "../../utils/ImgProfile";

interface CommentProps {
  toggleModalComment: () => void;
  commentData: {
    img?: string;
    name?: string;
    time?: string;
    post?: string;
    comments?: CommentType[];
  };
  newComment: string;
  setNewComment: (comment: string) => void;
  handleAddComment: () => void;
}

const NewComment: React.FC<CommentProps> = ({
  commentData,
  toggleModalComment,
  newComment,
  setNewComment,
  handleAddComment,
}) => {
  return (
    <FormModalLayout>
      {/* header */}
      <header className="relative w-full px-4 py-2 border-b border-style flex justify-center ">
        <h1 className="font-semibold">Respuesta</h1>
        <button onClick={toggleModalComment} className="absolute left-4 top-2">
          <XMarkIcon className="w-7 h-7" />
        </button>
      </header>
      {/* container scroll */}
      <div className="px-4 pt-4 pb-2 overflow-y-scroll h-auto max-h-[350px] [&::-webkit-scrollbar]:hidden ">
        {/* usuario y post */}
        <div className="flex items-start gap-2 text-sm">
          <div className="w-9 h-9">
            <ImgProfile img={commentData.img} ifExist={true} />
          </div>
          <div>
            <div className="flex gap-4">
              <p className="">{commentData.name}</p>
              <p className="text-[#aaaaaa] font-light">{commentData.time}</p>
            </div>
            <p className="text-[#ddd]">{commentData.post}</p>
          </div>
        </div>
        {/* separador */}
        <div className="w-full h-6 border-l-3 border-style ml-4 mt-1"></div>

        {/* comentarios */}
        {commentData.comments?.map((comment, i) => (
          <div className="border-l-3 border-style ml-4 pl-4 pb-4" key={i}>
            <div className=" flex items-start gap-2 text-sm">
              <div className="w-9 h-9">
                <ImgProfile img={comment.img} ifExist={true} />
              </div>
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
      </div>
      {/* nuevo comentario */}
      <div className="padding-x flex items-center justify-center pt-1 pb-4">
        <input
          type="text"
          placeholder="Escribe algo..."
          className="w-full p-2 text-white font-extralight outline-none"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          autoFocus
        />
        <button
          className="px-4 py-1 border border-style rounded-xl shadow button-theme"
          onClick={handleAddComment}
        >
          Publicar
        </button>
      </div>
    </FormModalLayout>
  );
};

export default NewComment;
