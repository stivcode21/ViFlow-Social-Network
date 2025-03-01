import { NewPost } from "../../data/data";
import { useIuStore } from "../../store/uiStore";
import Post from "../home/Post";

const SectionHilos: React.FC = () => {
  //estados globales
  const { setNewCommentModal, setSelectedPost } = useIuStore();

  const handleCommentClick = (postId: number) => {
    setSelectedPost(postId);
    setNewCommentModal(true);
  };
  return (
    <div>
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
    </div>
  );
};

export default SectionHilos;
