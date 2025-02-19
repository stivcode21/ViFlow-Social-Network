import { ReactNode } from "react";
import Navbar from "../utils/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-y-scroll w-full">
      <div className="margin">{children}</div>
      <Navbar />
    </div>
  );
};

export default MainLayout;
