import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
const FormModalLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full fixed top-0 bg-black/80 z-50 transition-all ease-in-out flex items-center justify-center">
      {/* modal */}
      <div className="modal-content bg-[#181818] border border-style h-auto rounded-2xl w-[95%] md:w-[52%] lg:w-[35%]">
        {children}
      </div>
    </div>
  );
};

export default FormModalLayout;
