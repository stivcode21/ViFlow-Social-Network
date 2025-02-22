import NewPostInput from "../components/home/NewPostInput";
import Post from "../components/home/Post";
import MainLayout from "../layouts/MainLayout";
import { PostData } from "../data/data";
import NewComment from "../components/home/newComment";
import { useState } from "react";

const Home: React.FC = () => {
  const [modalComment, setModalComment] = useState(false);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  //abrir modal y obtener data
  const handleCommentClick = (postId: number) => {
    setSelectedPost(postId);
    setModalComment(true);
  };

  //filtrado por id de post seleccionado
  const filterInfo = PostData.find((post) => post.id === selectedPost) || null;

  return (
    <>
      {modalComment && filterInfo && (
        <NewComment
          toggleModalComment={() => setModalComment(false)} //cerrar modal
          commentData={filterInfo} //info de post seleccionado
        />
      )}
      {/* Layout principal */}
      <MainLayout>
        <div className="w-full h-auto">
          <NewPostInput />
          {PostData?.map((post, index) => (
            <Post
              key={index}
              img={post.img}
              name={post.name}
              post={post.post}
              time={post.time}
              amountLike={post.amountLike}
              amountComments={post.amountComments}
              amountRepost={post.amountRepost}
              toggleModalComment={() => handleCommentClick(post.id)}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
