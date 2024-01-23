import React from 'react';
import {Outlet} from "react-router-dom";
import NavigationBar from '../Components/NavigationBar';
import FooterBar from '../Components/FooterBar';

function Layout() {
  return (
    <div className="pt-16 pb-12">
      <NavigationBar/>
      <Outlet/>      
      <FooterBar/>
    </div>
  )
}

export default Layout
