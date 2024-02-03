"use client";
import React from "react";
import { Avatar, Dropdown, Navbar, NavbarLink } from "flowbite-react";
import { HiLogout, HiViewGrid, HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import AuthService from "../services/auth-service";


function NavigationBar() {
  return (
    <Navbar
      fluid
      style={{ backgroundColor: "rgba(1, 9, 34, 0.80)" }}
      className="fixed top-0 w-full z-50 shadow"
    >
      <Navbar.Brand href="https://hakmana.ps.gov.lk/">
        <img
          src={process.env.PUBLIC_URL + "/Images/government-logo.png"}
          className="mr-3 h-10"
          alt="Government Logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/Images/sabha-logo.png"}
          className="mr-3 h-10"
          alt="Sabha Logo"
        />
        <span className="self-center  text-center   flex-wrap text-lg font-semibold text-white uppercase ">
          HPSDF
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              className="mx-5"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-bold">
              Mr. Sachintha Dilshan
            </span>
            <span className="block truncate text-sm font-medium">
              sachinthadilshan335@gmail.com
            </span>
          </Dropdown.Header>
          <Link to="HR/dashboard">
            <Dropdown.Item icon={HiViewGrid}> Dashboard </Dropdown.Item>
          </Link>
          <Link to="/HR/employeeProfile">
            <Dropdown.Item icon={HiUserCircle}>Profile</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Link to="/">
            <Dropdown.Item icon={HiLogout} onClick={()=>AuthService.logout()}>Sign out</Dropdown.Item>
          </Link>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavbarLink active>
          <Link to="/HR/dashboard">
            <span className="block text-white text-center uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white md:bg-cyan-800 md:hover:bg-cyan-700  transition ease-in-out duration-300">
              <i className="fas fa-home text-lg md:text-white mr-2"></i>
              Home
            </span>
          </Link>
        </NavbarLink>

        <NavbarLink>
          <Link to="leaves">
            <span className="block text-center hover:text-black md:hover:text-white text-white  uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white  md:hover:bg-cyan-700  transition ease-in-out duration-300">
              <i className="	fa fa-calendar text-lg md:text-white mr-2"></i>
              Leaves
            </span>
          </Link>
        </NavbarLink>

        <NavbarLink>
          <Link to="/ARC/arcAddFile">
            <span className="block text-center w-full hover:text-black md:hover:text-white text-white  uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white  md:hover:bg-cyan-700  transition ease-in-out duration-300">
              <i className="fas fa-archive text-lg md:text-white mr-2"></i>
              Archive
            </span>
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="store">
            <span className="block text-center w-full hover:text-black md:hover:text-white text-white  uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white  md:hover:bg-cyan-700  transition ease-in-out duration-300">
              <i className="fas fa-store-alt text-lg md:text-white mr-2"></i>
              Store
            </span>
          </Link>
        </NavbarLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
