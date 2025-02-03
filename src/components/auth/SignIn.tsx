import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-2xl lg:text-3xl font-extrabold">
          Welcolme of ViFlow
        </h1>
        <div className="w-fit bg-gray-500 rounded-full flex mx-auto">
          <Link
            to="/auth/signIn"
            className="py-2 px-8 lg:px-12 rounded-full bg-[#6363FF] font-semibold text-white"
          >
            Sign In
          </Link>
          <Link
            to="/auth/signUp"
            className="py-2 px-8 lg:px-12 rounded-full bg-transparent  font-semibold text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <form action="/home" className="flex flex-col gap-y-8 ">
        <input
          type="Email"
          className="w-full py-1 border-b-2 border-[#ccc] outline-none "
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full py-1 border-b-2 border-[#ccc] outline-none "
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="mt-8 py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white"
        >
          Send
        </button>
        <button>
          <img
            src="/icons/Google.svg"
            alt="google"
            className="w-6 h-6 mx-auto"
          />
        </button>
      </form>
    </>
  );
};

export default SignIn;
