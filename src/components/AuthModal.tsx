import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import SignIn from "./utils/SignIn";
import SignUp from "./utils/SignUp";
import AuthCode from "./utils/AuthCode";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const routes: RouteType[] = [
  { path: "/", element: <SignIn /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/code", element: <AuthCode /> },
];

const AuthModal: React.FC = () => {
  return (
    <section className="w-full h-full  bg-transparent backdrop-blur-xs rounded-2xl py-8 border border-[#6363FF] text-white shadow-lg relative">
      {/* background */}
      <div className="bg-gradient-to-b to-black via-black h-full w-full absolute top-0 left-0 opacity-70 -z-10 rounded-2xl"></div>

      <h1 className="text-center pb-8 text-2xl lg:text-3xl font-extrabold">
        Welcolme of ViFlow
      </h1>
      <div className="px-6 lg:px-10 h-full flex flex-col gap-y-24">
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </div>
    </section>
  );
};

export default AuthModal;
