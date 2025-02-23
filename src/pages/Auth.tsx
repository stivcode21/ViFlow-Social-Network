import AuthModal from "../components/auth/AuthModal";
import InfoViflow from "../components/auth/InfoViflow";
import { useIuStore } from "../store/uiStore";

const Auth: React.FC = () => {
  const { authModal } = useIuStore();

  return (
    <>
      <div className="bg-[url(/bgg.jpg)] w-full h-screen bg-center bg-cover relative box overflow-hidden">
        <div className="bg-gradient-to-b to-black via-black h-full w-full absolute top-0 left-0 opacity-75"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full py-10 md:py-0">
          {/* cuando cambia de estado usando el boton muestra modal */}
          {authModal ? <AuthModal /> : <InfoViflow />}
          <div className="hidden md:flex justify-center items-center gap-20 z-10 my-20 xl:ml-28">
            <AuthModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
