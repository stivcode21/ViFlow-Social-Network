import AuthModal from "./AuthModal";
import LoginMobile from "./LoginMobile";
import { useIuStore } from "../store/uiStore";

const Login: React.FC = () => {
  const authModal = useIuStore((state) => state.authModal);

  return (
    <>
      <div className="bg-[url(/bgg.jpg)] w-full h-screen bg-center bg-cover relative box">
        <div className="bg-gradient-to-b to-black via-black h-full w-full absolute top-0 left-0 opacity-75"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full py-10 md:py-0">
          {/* cuando cambia de estado usando el boton muestra modal */}
          {authModal ? <AuthModal /> : <LoginMobile />}
          <div className="hidden md:flex justify-center items-center gap-20 z-10 my-20 xl:ml-28">
            <AuthModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
