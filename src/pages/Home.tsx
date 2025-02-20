import NewPost from "../components/home/NewPost";
import Post from "../components/home/Post";
import MainLayout from "../layouts/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full h-auto">
        <NewPost />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </MainLayout>
  );
};

export default Home;
