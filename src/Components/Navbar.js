import React from 'react'
import {Link} from "react-router-dom";
import "../Styles/Navbar.css"

function Navbar() {
  const [show, setShow] = React.useState([false, false]);

  return (
    <nav>
        <div className="logo">
          <img
            src="Images/governmentLogo.png"
            alt="Government Logo"
            className="governmentLogo"
          />
          <img
            src="Images/hakmanaSabhaLogo.png"
            alt="Hakmana Pradeshiya Sabha Logo"
            className="sabhaLogo"
          />
        </div>
        <label  className="organizationName"> Hakmana Pradeshiya Sabha </label>
        <ul style={{left: show[0] ? "0%" : "-100%"}}>
            <li>
              <Link to="/dashboard">
                <i className="fas fa-home icon"></i>
              <label className="iconLabels">Home</label>
              </Link>
            </li>
            <li>
              <Link to="/reports">
                <i className="fas fa-chart-line icon"></i>
                 <label className="iconLabels">Reports</label>
              </Link>
            </li>
            <li>
              <Link to="alerts">
                <i className="far fa-bell icon"> </i>
                <label className="iconLabels">Alerts</label>
              </Link>
            </li>
        </ul>
        <img src="Images/profilePhoto.png" alt="Profile Pic" className="profilePhoto" onClick={() => setShow(prevShow => [prevShow[0], !prevShow[1]])} />
        <div className="sub-menu-wrap" style={{maxHeight: show[1] ? "400px" : "0px"}}>
          <div className="sub-menu">
            <div className="user-info">
              <img src="Images/profilePhoto.png" alt="Profile Pic" className="profilePhoto"/>
              <h3>Ms. Chani Ekanayake</h3>
            </div>
            <hr/>
            <Link to="/profile" className="sub-menu-link">
              <i className="fas fa-id-badge sub-menu-icon"></i>
              <p>User Profile</p>
              <span>&gt;</span>
            </Link>
            <Link to="/logout" className="sub-menu-link">
            <i className="fas fa-sign-out-alt sub-menu-icon"></i>
              <p>Sign Out</p>
              <span>&gt;</span>
            </Link>
          </div>
        </div>
        <div class="checkbtn" onClick={() => setShow(prevShow => [!prevShow[0], prevShow[1]])}>
            <i className='fas fa-bars'></i>
        </div>
    </nav>
  )
}

export default Navbar
