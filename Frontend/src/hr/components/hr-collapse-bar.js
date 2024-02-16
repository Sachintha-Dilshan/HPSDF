import React from "react";
import { Link } from "react-router-dom";

function HRCollapseBar() {
  const [show, setShow] = React.useState(false);

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
           <Link to="/HR/addEmployee"><li>Add New Employee</li></Link>
           <Link to="/HR/addSections"><li>Add New Section</li></Link>
           <Link to="/HR/addDesignations"><li>Add New Designation</li></Link>
           <Link to="/HR/addServiceSectors"><li>Add New Service Sector</li></Link> 
           <Link to="/HR/addSubjects"><li>Add New Subject</li></Link> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HRCollapseBar;