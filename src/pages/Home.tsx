import NewPost from "../components/home/NewPost";
import Post from "../components/home/Post";
import MainLayout from "../layouts/MainLayout";
import PostData from "../data/data.ts";

const Home: React.FC = () => {
  return (
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
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Home;
