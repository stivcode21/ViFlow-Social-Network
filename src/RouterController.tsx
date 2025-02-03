import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const RouterController: React.FC = () => {
  type RouteType = {
    path: string;
    element: React.ReactNode;
  };

  const routes: RouteType[] = [
    { path: "/", element: <Auth /> },
    { path: "/auth/*", element: <Auth /> },
    { path: "/home", element: <Home /> },
  ];
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default RouterController;
