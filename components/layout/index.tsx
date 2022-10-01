import React, { ReactNode } from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <NavBar />
      <main className="my-20 mx-28">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
