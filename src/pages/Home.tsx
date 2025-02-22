import NewPost from "../components/home/NewPost";
import Post from "../components/home/Post";
import MainLayout from "../layouts/MainLayout";
import PostData from "../data/data.ts";
import NewComment from "../components/home/newComment.tsx";
import { useState } from "react";

const Home: React.FC = () => {
  const [modalComment, setModalComment] = useState(false);
  return (
    <>
      {modalComment && <NewComment />}
      <MainLayout>
        <div className="w-full h-auto">
          <NewPost />
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
              toggleModalComment={() => setModalComment(true)}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
