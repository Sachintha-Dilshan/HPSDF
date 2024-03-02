"use client";
import React from "react";
import { Avatar, Dropdown, Navbar, NavbarLink } from "flowbite-react";
import { HiLogout, HiViewGrid, HiUserCircle } from "react-icons/hi";
import { FaHome, FaArchive, FaStoreAlt, FaCalendarCheck} from "react-icons/fa";
import {useNavigate } from "react-router-dom";
import AuthService from "../services/auth-service";

function NavigationBar() {
  const navigate = useNavigate();
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
              //img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              className="mx-5"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-bold">
              එම්.එස්. හිරිමුතුගොඩ 
            </span>
            <span className="block truncate text-sm font-medium">
              hirimuthu@gmail.com
            </span>
          </Dropdown.Header>

          <Dropdown.Item
            icon={HiViewGrid}
            onClick={() => navigate("HR/dashboard")}
          >
            {" "}
            Dashboard{" "}
          </Dropdown.Item>

          <Dropdown.Item
            icon={HiUserCircle}
            onClick={() => navigate("HR/employeeProfile")}
          >
            Profile
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item
            icon={HiLogout}
            onClick={() => {
              AuthService.logout();
              navigate("/");
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavbarLink
          onClick={() => navigate("HR/dashboard")}
          className="cursor-pointer"
          active
        >
          <span className="text-white text-center uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white md:bg-cyan-800 md:hover:bg-cyan-700  transition ease-in-out duration-300 flex items-center justify-center">
          <FaHome className="text-xl text-white mr-2 inline-block"/>
            Home
          </span>
        </NavbarLink>

        <NavbarLink
          onClick={() => navigate("leaves")}
          className="cursor-pointer"
        >
          <span className="text-center hover:text-black md:hover:text-white text-white  uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white  md:hover:bg-cyan-700  transition ease-in-out duration-300 flex items-center justify-center">
          <FaCalendarCheck className="text-xl text-white mr-2 inline-block" />
            Leaves
          </span>
        </NavbarLink>

        <NavbarLink
          onClick={() => navigate("AR/archiveDashboard")}   //archiveDashboard   testArHome
          className="cursor-pointer"
        >
          <span className="text-center w-full hover:text-black md:hover:text-white text-white  uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white  md:hover:bg-cyan-700  transition ease-in-out duration-300 flex items-center justify-center">
          <FaArchive className="text-lg text-white mr-2 inline-block" />
            Archive
          </span>
        </NavbarLink>
        <NavbarLink
          onClick={() => navigate("store")}
          className="cursor-pointer"
        >
          <span className="text-center w-full hover:text-black md:hover:text-white text-white  uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white  md:hover:bg-cyan-700  transition ease-in-out duration-300 flex items-center justify-center">
          <FaStoreAlt  className="text-xl text-white mr-2 inline-block" />
            Store
          </span>
        </NavbarLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
