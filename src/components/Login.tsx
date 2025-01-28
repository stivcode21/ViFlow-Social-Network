import AuthModal from "./AuthModal";

const Login: React.FC = () => {
  return (
    <>
      <div className="bg-[url(./bg.webp)] w-full h-full bg-center bg-cover relative box">
        <div className="bg-gradient-to-b to-black via-black h-full w-full absolute top-0 left-0 opacity-75"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div className="h-full w-full pt-10 pb-24 flex flex-col items-center justify-between relative">
            <div className="h-full flex flex-col items-center justify-center lg:gap-10">
              <img
                src="./logo.webp"
                alt="logo"
                className="w-1/2 h-1/2 object-contain z-10"
              />
              <p className="text-white text-sm text-center">
                ¡Bienvenido a ViFlow Descubre, comparte y conecta con personas
                increíbles en nuestra comunidad. Aquí puedes expresar tus ideas,
                subir tus mejores momentos y explorar contenido que te inspira.
                No te quedes fuera, regístrate ahora o inicia sesión para ser
                parte de esta experiencia única. ¡Únete hoy y conecta con el
                mundo como nunca antes!
              </p>
            </div>
            <div className="z-10 flex justify-center items-center flex-col md:hidden">
              <button className="py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white">
                Log In
              </button>
              <p className="text-white mt-4 font-medium">
                Don't have an account? <a className="text-blue-500">Sign Up</a>
              </p>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center gap-20 z-10 my-20 xl:ml-28">
            <AuthModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
