import { ReactNode } from "react";
import Navbar from "../utils/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-auto w-full">
      <div className="margin md:bg-[#181818] md:mt-6 border border-style md:rounded-t-2xl pb-0.5">
        {children}
      </div>
      <Navbar />
    </div>
  );
};

export default MainLayout;
