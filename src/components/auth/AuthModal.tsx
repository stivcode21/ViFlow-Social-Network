import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthCode from "./AuthCode";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const routes: RouteType[] = [
  { path: "", element: <SignIn /> }, // Ruta por defecto para /auth
  { path: "signIn", element: <SignIn /> },
  { path: "signUp", element: <SignUp /> },
  { path: "code", element: <AuthCode /> },
];

const AuthModal: React.FC = () => {
  return (
    <section className="w-full h-full  bg-transparent backdrop-blur-xs rounded-2xl py-8 border border-[#6363FF] text-white shadow-lg relative">
      {/* background */}
      <div className="bg-gradient-to-b to-black via-black h-full w-full absolute top-0 left-0 opacity-70 -z-10 rounded-2xl"></div>

      <div className="px-6 lg:px-10 h-full flex flex-col gap-y-24">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </section>
  );
};

export default AuthModal;
