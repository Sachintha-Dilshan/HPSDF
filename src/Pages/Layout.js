import React from 'react';
import {Outlet} from "react-router-dom";
import "../Styles/Layout.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <div className="layout">
      <Navbar/>
      <Outlet/>      
      <Footer/>
    </div>
  )
}

export default Layout
