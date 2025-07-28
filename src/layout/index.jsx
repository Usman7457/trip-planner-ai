import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col">
        <main className="w-full flex-grow">
          <Header />
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
