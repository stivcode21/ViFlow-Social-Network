const AuthModal: React.FC = () => {
  return (
    <section className="w-full h-full bg-transparent backdrop-blur-xs rounded-2xl py-8 border border-[#6363FF] text-white shadow-lg relative">
      <div className="bg-gradient-to-b to-black via-black h-full w-full absolute top-0 left-0 opacity-70 -z-10 rounded-2xl"></div>

      <h1 className="text-center pb-8 text-2xl font-extrabold">
        Welcolme of ViFlow
      </h1>
      <div className="px-10 h-full flex flex-col gap-y-24">
        <div className="w-fit bg-gray-500 rounded-full flex mx-auto">
          <button className="py-2 px-4 lg:px-10 rounded-full bg-[#6363FF] font-semibold text-white">
            Sign In
          </button>
          <button className="py-2 px-4 lg:px-10 rounded-full bg-transparent  font-semibold text-white">
            Sign Up
          </button>
        </div>

        <form action="auth" className="flex flex-col gap-y-8 ">
          <input
            type="Email"
            className="w-full py-1 border-b-2 border-[#ccc] outline-none "
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full py-1 border-b-2 border-[#ccc] outline-none "
            placeholder="Password"
          />
          <button
            type="submit"
            className="mt-8 py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white"
          >
            enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuthModal;
