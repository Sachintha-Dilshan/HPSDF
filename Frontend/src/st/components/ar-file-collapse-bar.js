import React from "react";
import { Link } from "react-router-dom";
import { IoPeople, IoAddOutline, IoSettingsSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
function STCollapseBar() {
  const [show, setShow] = React.useState(false);
  const [showSettings,setShowSettings]=React.useState(false);


  return (
    <div
      className=" rounded-tr-3xl rounded-br-3xl items-center px-1 py-10 my-2  w-8  bg-gray-700 transition-all duration-300 ease-in-out hover:w-52 cursor-pointer fixed left-0 top-16 bottom-14 z-50"
      style={{ backgroundColor: "rgba(1, 9, 34, 0.80)" }}
      onMouseEnter={() => setShow((prevShow) => !prevShow)}
      onMouseLeave={() => setShow((prevShow) => !prevShow)}
    >
      <div>
        <i className="fas fa-angle-double-right text-white text-2xl"></i>
      </div>
      <div className="flex flex-col h-full">
        <div style={{ display: show ? "block" : "none" }}>
          <ul className="text-white uppercase">
          <Link to="/ST/searchItems"><li className="font-bold my-5"><IoIosSearch className="inline-block text-2xl" />Search Items</li></Link>
          <Link to="/ST/checkInOutItems"><li className="font-bold my-5"><IoPeople className="inline-block text-2xl" />Check In Out Item</li></Link>
          
          <li
          className="font-bold my-5"
           onMouseEnter={()=>setShowSettings((prevShow)=>!prevShow)}
          //  onMouseLeave={()=>setShowSettings((prevShow)=>!prevShow)}
           >
            <IoSettingsSharp className="inline-block text-2xl" />Settings
          </li>
          <ul
              className="ml-5"
              style={{ display: showSettings ? "block" : "none" }}
            >
             <Link to="/ST/addItems"> <li>
              <IoAddOutline className="inline-block text-2xl" />
                ADD ITEMS
              </li></Link>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default STCollapseBar;