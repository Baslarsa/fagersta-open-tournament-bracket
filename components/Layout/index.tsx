import { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`h-screen bg-[url('/images/retrowave.jpg')] bg-center bg-cover`}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
