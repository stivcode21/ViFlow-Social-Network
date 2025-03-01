import { useState } from "react";
import NewPostHeader from "../components/home/NewPostHeader";
import ButtonsProfile from "../components/profile/ButtonsProfile";
import InfoUser from "../components/profile/InfoUser";
import NavbarProfile from "../components/profile/NavbarProfile";
import SectionHilos from "../components/profile/SectionHilos";
import MainLayout from "../layouts/MainLayout";
import SectionRepost from "../components/profile/SectionRepost";

const Profile: React.FC = () => {
  const [navbarProfileState, setNavbarProfileState] = useState(false);

  return (
    <MainLayout nameSection="Perfil">
      <InfoUser />
      <ButtonsProfile />
      <NavbarProfile
        toggleNavbar={setNavbarProfileState}
        navbarState={navbarProfileState}
      />
      {navbarProfileState ? (
        <SectionRepost />
      ) : (
        <>
          <NewPostHeader />
          <SectionHilos />
        </>
      )}
    </MainLayout>
  );
};

export default Profile;
