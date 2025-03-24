import React from "react";
import { Outlet } from "react-router-dom"; // Ensure react-router-dom is correctly imported
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet /> {/* The Outlet component renders the child routes */}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
