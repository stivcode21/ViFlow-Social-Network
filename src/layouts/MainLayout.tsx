import { ReactNode } from "react";
import Navbar from "../utils/Navbar";

interface MainLayoutProps {
  children: ReactNode;
  nameSection: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, nameSection }) => {
  return (
    <div className="h-auto w-full">
      <h2 className="hidden md:flex justify-center md:my-3 font-semibold bg-[#0a0a0a] z-50">
        {nameSection}
      </h2>
      <div className="margin md:bg-[#181818] border border-style md:rounded-t-2xl">
        {children}
      </div>
      <Navbar />
    </div>
  );
};

export default MainLayout;
