import React from 'react'
import {Link} from "react-router-dom";
//import "../Styles/Navbar.css"

function Navbar1() {
  const [show, setShow] = React.useState([false, false]);

  return (
    <nav className="bg-teal-950 fixed top-0 w-screen h-16 flex items-center shadow px-20">
        <div className="flex items-center mr-auto">
          <img
            src="Images/governmentLogo.png"
            alt="Government Logo"
            className="rounded h-14"
          />
          <img
            src="Images/hakmanaSabhaLogo.png"
            alt="Hakmana Pradeshiya Sabha Logo"
            className="rounded ml-2 h-12"
          />
          <label  className="text-white px-5 font-bold text-lg uppercase text-center"> Hakmana Pradeshiya Sabha </label>
        </div>

        
          <ul style={{left: show[0] ? "0%" : "-100%"}}  className="lg:flex hidden">
              <li>
                <Link to="/dashboard" className="lg:mx-6 lg:inline-block block m-14 leading-8 text-xl hover:text-cyan-300 cursor-pointer">
                  <i className="fas fa-home text-2xl text-white mr-2"></i>
                <label className="text-white text-lg font-semibold uppercase cursor-pointer">Home</label>
                </Link>
              </li>
              <li>
                <Link to="/reports" className="lg:mx-6 lg:inline-block block m-14 leading-8 text-xl hover:text-cyan-300">
                  <i className="fas fa-chart-line text-2xl text-white mr-2"></i>
                  <label className="text-white text-lg font-semibold uppercase cursor-pointer">Reports</label>
                </Link>
              </li>
              <li>
                <Link to="alerts" className="lg:mx-6 lg:inline-block block m-14 leading-8 text-xl hover:text-cyan-300">
                  <i className="far fa-bell text-2xl text-white mr-2"> </i>
                  <label className="text-white text-lg font-semibold uppercase cursor-pointer">Alerts</label>
                </Link>
              </li>
          </ul>

          <ul style={{left: show[0] ? "0%" : "-100%"}}  className="fixed w-full h-screen bg-cyan-950 opacity-95 top-16 text-center flex flex-col items-center transition-all duration-500">
              <li>
                <Link to="/dashboard" className="lg:mx-6 lg:inline-block block m-14 leading-8 text-xl hover:text-cyan-300 cursor-pointer">
                  <i className="fas fa-home text-2xl text-white mr-2"></i>
                <label className="text-white text-lg font-semibold uppercase cursor-pointer">Home</label>
                </Link>
              </li>
              <li>
                <Link to="/reports" className="lg:mx-6 lg:inline-block block m-14 leading-8 text-xl hover:text-cyan-300">
                  <i className="fas fa-chart-line text-2xl text-white mr-2"></i>
                  <label className="text-white text-lg font-semibold uppercase cursor-pointer">Reports</label>
                </Link>
              </li>
              <li>
                <Link to="alerts" className="lg:mx-6 lg:inline-block block m-14 leading-8 text-xl hover:text-cyan-300">
                  <i className="far fa-bell text-2xl text-white mr-2"> </i>
                  <label className="text-white text-lg font-semibold uppercase cursor-pointer">Alerts</label>
                </Link>
              </li>
          </ul>
          <img src="Images/profilePhoto.png" alt="Profile Pic" className="rounded-full border-white h-14 mr-10" onClick={() => setShow(prevShow => [prevShow[0], !prevShow[1]])} />
      
          
          <div className="absolute top-full right-24 max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out" style={{maxHeight: show[1] ? "25rem" : "0rem"}}>
            <div className="bg-white p-5 m-4 rounded-lg">
              <div>
                <img src="Images/profilePhoto.png" alt="Profile Pic" className="rounded-full border-white h-14 "/>
                <h3>Ms. Chani Ekanayake</h3>
              </div>
              <hr className="border my-1" />
              <Link to="/profile" className="flex items-center mb-2 justify-between">
                <i className="fas fa-id-badge"></i>
                <p>User Profile</p>
                <span>&gt;</span>
              </Link>
              <Link to="/logout" className="flex items-center mb-2 justify-between">
              <i className="fas fa-sign-out-alt"></i>
                <p>Sign Out</p>
                <span>&gt;</span>
              </Link>
            </div>
          </div>
          <div className="text-2xl text-white float-right mr-2 cursor-pointer lg:hidden" onClick={() => setShow(prevShow => [!prevShow[0], prevShow[1]])}>
              <i className='fas fa-bars'></i>
          </div>
        
          
        
        
    </nav>
  )
}

export default Navbar1
