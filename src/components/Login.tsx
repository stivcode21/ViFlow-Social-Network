const Login: React.FC = () => {
  return (
    <>
      <div className="bg-[url(./bg.webp)] w-full h-full bg-center bg-cover">
        <div className="h-full pt-5 pb-28 flex flex-col items-center justify-between relative">
          <div className="bg-gradient-to-b to-black via-black h-full w-full absolute top-0 left-0 opacity-75"></div>
          <img
            src="./logo.webp"
            alt="logo"
            className="w-[40%] h-[40%] object-contain z-10"
          />
          <div className="z-10 flex justify-center items-center flex-col">
            <button className="py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white">
              Log In
            </button>
            <p className="text-white mt-4">
              Don't have an account? <a className="text-blue-500">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
