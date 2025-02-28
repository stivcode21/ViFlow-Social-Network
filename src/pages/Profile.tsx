import InfoUser from "../components/profile/InfoUser";
import MainLayout from "../layouts/MainLayout";

const Profile: React.FC = () => {
  return (
    <MainLayout nameSection="Perfil">
      <InfoUser></InfoUser>
    </MainLayout>
  );
};

export default Profile;
