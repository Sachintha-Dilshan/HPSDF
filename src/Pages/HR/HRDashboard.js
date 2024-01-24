import React from "react";
import CollapseBar from "../../Components/UI/CollapseBar";
import DashboardCard from "../../Components/UI/DashboardCard";
import Tab from "../../Components/UI/Tab";
import LeaveTracker from "../../Components/LeaveTracker";
import { FaCalendarCheck, FaUmbrellaBeach, FaCheckDouble,FaBell} from "react-icons/fa";

function HRDashboard() {
  const cardData = [
    {
      id: 1,
      title: "Total Employees",
      count: 150,
      image: "/Images/totalEmployees.jpg",
    },
    {
      id: 2,
      title: "On Leave Today",
      count: 12,
      image: "/Images/onLeave.webp",
    },
    {
      id: 3,
      title: "Leave requests",
      count: 5,
      image: "/Images/pending.jpg",
    },
    {
      id: 4,
      title: "Birthday Today",
      count: 12,
      image: "/Images/employeeBirthday.jpg",
    },
  ];

  const tabData = [
    {
      id: 1 ,
      active: true,
      title: "Track Leaves",
      icon: FaCheckDouble,
      content: <LeaveTracker/> 
    },
    {
      id: 2,
      active: true,
      title: "Employee Attendance ",
      icon: FaCalendarCheck,
      content: ""
    },
    {
      id: 3,
      active: true,
      title: "Employee Leaves",
      icon: FaUmbrellaBeach,
      content: ""
    },
    {
        id: 4,
        active: true,
        title: "Notifications",
        icon: FaBell,
        content: ""
      }
   ];

  return (
    <main className="flex justify-between">
      <CollapseBar />
      <div className="flex-grow m-5">
        <h3 className="text-center text-lg text-red-400 border-b-2 border-b-slate-200 uppercase">
          Administration Section
        </h3>
        {/* Dashboard cards starts here */}
        <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-10 my-5 mx-5">
          {cardData.map((data) => (
            <DashboardCard
              key={data.id}
              title={data.title}
              count={data.count}
              image={data.image}
            />
          ))}
        </div>

        <div className="grid grid-cols-1">
            <Tab para={tabData}/>
        </div>
      </div>
    </main>
  );
}

export default HRDashboard;
