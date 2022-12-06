import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/SheatPages/Footer/Footer";
import Navbar from "../Component/SheatPages/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
