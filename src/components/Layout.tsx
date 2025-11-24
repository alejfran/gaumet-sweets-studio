import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavbarProvider } from "@/contexts/NavbarContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <NavbarProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-28">{children}</main>
        <Footer />
      </div>
    </NavbarProvider>
  );
};

export default Layout;
