import React from "react";
import CollapseBar from "../../Components/UI/CollapseBar";
import Tab from "../../Components/UI/Tab";
import HREmployeeData from "./HREmployeeData";
import { HiUserCircle } from "react-icons/hi";
import {
  FaBriefcase,
  FaCalendarCheck,
  FaUmbrellaBeach,
  FaFile,
} from "react-icons/fa";

function HREmployeeProfile() {
  const data = [
    {
      id: 1,
      active: true,
      title: "Personal Data",
      icon: HiUserCircle,
      content: <HREmployeeData />,
    },
    {
      id: 2,
      active: true,
      title: "Job Data",
      icon: FaBriefcase,
      content: <HREmployeeData />,
    },
    {
      id: 3,
      active: true,
      title: "Personal File",
      icon: FaFile,
      content: <HREmployeeData />,
    },
    {
      id: 4,
      active: true,
      title: "Attendance Data",
      icon: FaCalendarCheck,
      content: <HREmployeeData />,
    },
    {
      id: 5,
      active: true,
      title: "Leave Data",
      icon: FaUmbrellaBeach,
      content: <HREmployeeData />,
    },
  ];
  return (
    <main>
      <CollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-red-400 border-b-2 border-b-slate-200 uppercase mx-5">
          Employee Profile
        </h3>
        <div className="flex items-center  flex-grow">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="profile pic"
              className="rounded-full w-40 mb-5"
            />
          </div>
          <div>Employee Data</div>
        </div>

        <div className="grid grid-cols-1">
          <Tab para={data} />
        </div>
      </div>
    </main>
  );
}

export default HREmployeeProfile;
