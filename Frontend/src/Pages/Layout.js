import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";
import FooterBar from "../Components/FooterBar";

function Layout() {
  return (
    <div>
      <NavigationBar />
      <div className="mt-16 mb-12 ml-7">
        <Outlet />
      </div>
      <FooterBar />
    </div>
  );
}

export default Layout;
