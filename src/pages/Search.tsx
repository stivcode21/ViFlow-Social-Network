import UserSearch from "../components/search/UserSearch";
import MainLayout from "../layouts/MainLayout";

const Search: React.FC = () => {
  return (
    <MainLayout nameSection="Buscar">
      <UserSearch />
    </MainLayout>
  );
};

export default Search;
