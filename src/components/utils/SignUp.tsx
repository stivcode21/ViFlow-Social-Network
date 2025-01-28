import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <>
      <div className="w-fit bg-gray-500 rounded-full flex mx-auto">
        <Link
          to="/signIn"
          className="py-2 px-4 lg:px-10 rounded-full bg-transparent font-semibold text-white"
        >
          Sign In
        </Link>
        <Link
          to="/signUp"
          className="py-2 px-4 lg:px-10 rounded-full bg-[#6363FF] font-semibold text-white"
        >
          Sign Up
        </Link>
      </div>

      <form action="auth" className="flex flex-col gap-y-6 ">
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
        <input
          type="password"
          className="w-full py-1 border-b-2 border-[#ccc] outline-none "
          placeholder="Password"
        />
        <button
          type="submit"
          className="mt-8 py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white"
        >
          Send
        </button>
        <img src="./Google.svg" alt="google" className="w-6 h-6 mx-auto" />
      </form>
    </>
  );
};

export default SignUp;
