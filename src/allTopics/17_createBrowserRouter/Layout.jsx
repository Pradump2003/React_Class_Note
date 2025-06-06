import React from "react";
import MyNavbar from "../16_browerRouter/MyNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <MyNavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
