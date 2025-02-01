import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prueba from "./components/Prueba";
import AuthModal from "./components/AuthModal";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const routes: RouteType[] = [
  { path: "/", element: <Login /> },
  { path: "/auth/*", element: <Login /> },
  { path: "/home", element: <Prueba /> },
  { path: "/auth/*", element: <AuthModal /> }, // Ruta para AuthModal con subrutas
];

const App: React.FC = () => {
  return (
    <div className="min-h w-full overflow-hidden">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
