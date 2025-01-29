import { useIuStore } from "../store/uiStore";

const LoginMobile: React.FC = () => {
  const { setAuthModal } = useIuStore();

  return (
    <div className="h-full w-full flex flex-col items-center justify-center z-10 gap-10">
      <div className="flex flex-col items-center justify-center lg:gap-10">
        <img
          src="./LogoViflow.webp"
          alt="logo"
          className="w-1/2 h-1/2 object-contain mb-6"
        />
        <p className="text-white text-sm text-center">
          ¡Bienvenido a ViFlow Descubre, comparte y conecta con personas
          increíbles en nuestra comunidad. Aquí puedes expresar tus ideas, subir
          tus mejores momentos y explorar contenido que te inspira. No te quedes
          fuera, regístrate ahora o inicia sesión para ser parte de esta
          experiencia única. ¡Únete hoy y conecta con el mundo como nunca antes!
        </p>
      </div>
      <div className="flex justify-center items-center flex-col md:hidden">
        <button
          onClick={() => setAuthModal(true)}
          className="py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white"
        >
          Sign In
        </button>
        <p className="text-white mt-4 text-sm">
          Don't have an account?{" "}
          <button onClick={() => setAuthModal(true)} className="text-blue-500">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginMobile;
