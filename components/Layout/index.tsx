import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`h-screen bg-[url('/images/retrowave.jpg')] bg-center bg-cover`}
    >
      {children}
    </div>
  );
};

export default Layout;
