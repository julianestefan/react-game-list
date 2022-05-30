import { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


interface LayoutProps {
  children: ReactElement;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
