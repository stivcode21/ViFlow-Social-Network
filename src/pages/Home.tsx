import NewPostHeader from "../components/home/NewPostHeader";
import Post from "../components/home/Post";
import { PostData, NewPost } from "../data/data";
import MainLayout from "../layouts/MainLayout";
import { useIuStore } from "../store/uiStore";

const Home: React.FC = () => {
  //estados globales
  const { setNewCommentModal, setSelectedPost } = useIuStore();

  // Abrir modalNewcommet y obtener data
  const handleCommentClick = (postId: number) => {
    setSelectedPost(postId);
    setNewCommentModal(true);
  };

  return (
    <>
      {/*------- Layout principal -------- */}
      <MainLayout nameSection="Para ti">
        <div className="w-full h-auto pb-14 md:pb-0.5">
          <NewPostHeader />
          {NewPost?.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              img={post.img}
              name={post.name}
              post={post.post}
              time={post.time}
              follow={post.follow}
              amountLike={post.amountLike}
              amountComments={post.amountComments}
              amountRepost={post.amountRepost}
              toggleModalComment={() => handleCommentClick(post.id)}
            />
          ))}
          {PostData?.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              img={post.img}
              name={post.name}
              post={post.post}
              time={post.time}
              amountLike={post.amountLike}
              amountComments={post.amountComments}
              amountRepost={post.amountRepost}
              follow={post.follow}
              toggleModalComment={() => handleCommentClick(post.id)}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
