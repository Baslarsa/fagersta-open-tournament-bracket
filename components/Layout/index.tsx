import { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`h-screen bg-[url('/images/retrowave.jpg')] bg-center bg-cover px-4`}
    >
      <Header />
      <div className="max-w-7xl mx-auto px-2">{children}</div>
    </div>
  );
};

export default Layout;
