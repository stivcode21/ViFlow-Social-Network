import NewPostHeader from "../components/home/NewPostHeader";
import ButtonsProfile from "../components/profile/ButtonsProfile";
import InfoUser from "../components/profile/InfoUser";
import NavbarProfile from "../components/profile/NavbarProfile";
import SectionHilos from "../components/profile/SectionHilos";
import MainLayout from "../layouts/MainLayout";

const Profile: React.FC = () => {
  return (
    <MainLayout nameSection="Perfil">
      <InfoUser />
      <ButtonsProfile />
      <NavbarProfile />
      <NewPostHeader />
      <SectionHilos />
    </MainLayout>
  );
};

export default Profile;
