"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';


function NavigationBar() {
  return (
    <Navbar
      fluid
      style={{ backgroundColor: "rgba(1, 9, 34, 0.80)"}}
      className="fixed top-0 w-full z-50 shadow"
    >
      <Navbar.Brand href="https://hakmana.ps.gov.lk/">
        <img
          src="Images/governmentLogo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Government Logo"
        />
        <img
          src="Images/hakmanaSabhaLogo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Sabha Logo"
        />
        <span className="self-center  text-center   flex-wrap text-lg font-semibold text-white uppercase ">
          Hakmana PS
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
            <span className="block text-sm font-bold">MS. Chani Ekanayake</span>
            <span className="block truncate text-sm font-medium">
              chaniekanayake@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link href="dashboard" active>
          <span className="block text-white text-center uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white md:bg-cyan-800 md:hover:bg-cyan-700  transition ease-in-out duration-300">
            <i className="fas fa-home text-lg md:text-white mr-2"></i>
            Home
          </span>
        </Navbar.Link>
        <Navbar.Link href="reports">
          <span className="block text-center hover:text-black md:hover:text-white text-white  uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white  md:hover:bg-cyan-700  transition ease-in-out duration-300">
          <i className="fas fa-chart-line text-lg md:text-white mr-2"></i>
            Reports
          </span>
        </Navbar.Link>
        <Navbar.Link href="alerts">
          <span className="block text-center w-full hover:text-black md:hover:text-white text-white  uppercase md:px-4 md:py-1 md:rounded-full md:border md:border-solid md:border-white  md:hover:bg-cyan-700  transition ease-in-out duration-300">
          <i className="far fa-bell text-lg md:text-white mr-2"></i>
            Alerts
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
