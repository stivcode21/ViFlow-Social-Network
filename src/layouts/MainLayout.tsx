import { ReactNode, useState } from "react";
import Navbar from "../utils/Navbar";
import NewPostModal from "../components/home/NewPostModal";
import { useIuStore } from "../store/uiStore";
import { addCommentToPost, CommentType, NewPost, PostData } from "../data/data";
import NewComment from "../components/home/NewComment";
import { useUserStore } from "../store/userStore";
import ModalMenu from "../utils/ModalMenu";
import HeaderMobile from "../utils/HeaderMobile";

interface MainLayoutProps {
  children: ReactNode;
  nameSection?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, nameSection }) => {
  //estado local de nuevo comentario
  const [newComment, setNewComment] = useState<string>("");

  //estados globales
  const { logoState, userNameState } = useUserStore();
  const {
    newPostModal,
    newCommentModal,
    menuDestokModal,
    menuMobileModal,
    setNewCommentModal,
    selectedPost,
  } = useIuStore();

  //funcion Añadir nuevo comentario
  const handleAddComment = () => {
    if (selectedPost && newComment) {
      const comment: CommentType = {
        id: 0, // Se actualizará al añadirlo
        img: logoState,
        name: userNameState,
        post: newComment,
        time: "Justo ahora",
      };
      addCommentToPost(selectedPost, comment);
      setNewComment("");
    }
  };

  // Filtrado por id de post seleccionado
  const filterInfo =
    PostData.find((post) => post.id === selectedPost) ||
    NewPost.find((post) => post.id === selectedPost) ||
    null;

  return (
    <div className="h-auto w-full">
      {/* Modal de newpost */}
      {newPostModal && <NewPostModal />}

      {/* Modal para nuevo comentario */}
      {newCommentModal && filterInfo && (
        <NewComment
          toggleModalComment={() => setNewCommentModal(false)} //cerrar modal
          commentData={filterInfo} //info de post seleccionado
          newComment={newComment} //estado actual con el nuevo comentario
          setNewComment={setNewComment} //actualiza el nuevo comentario
          handleAddComment={handleAddComment} //agregar nuevo comentario
        />
      )}

      {/* Modal del menu general */}
      {menuDestokModal && <ModalMenu />}
      {menuMobileModal && <ModalMenu ifMobile={true} />}

      {/*------- Layout principal -------- */}
      <h2 className="hidden md:flex justify-center md:my-3 font-semibold bg-[#0a0a0a] z-50">
        {nameSection}
      </h2>
      <HeaderMobile />
      {/* Contenedor de contenido */}
      <div className="margin md:bg-[#181818] border border-style border-b-transparent md:rounded-t-2xl pt-14 md:pt-0">
        {children}
      </div>
      <Navbar />
    </div>
  );
};

export default MainLayout;
