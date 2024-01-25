import React from "react";
import CollapseBar from "../../Components/UI/CollapseBar";
import DashboardCard from "../../Components/UI/DashboardCard";
import Tab from "../../Components/UI/Tab";
import LeaveTracker from "../../Components/LeaveTracker";
import TimeLine from "../../Components/TimeLine";
import { FaCalendarCheck, FaUmbrellaBeach, FaCheckDouble,FaBell} from "react-icons/fa";
import EmployeeAttendanceSheet from "../../Components/EmployeeAttendanceSheet";
import LeaveRegister from "../../Components/LeaveRegister";

function HRDashboard() {
  const cardData = [
    {
      id: 1,
      title: "Total Employees",
      count: 150,
      image: "/Images/totalEmployees.jpg",
      url: "/HR/allEmployees"
    },
    {
      id: 2,
      title: "On Leave Today",
      count: 12,
      image: "/Images/onLeave.webp",
      url: ""
    },
    {
      id: 3,
      title: "Leave requests",
      count: 5,
      image: "/Images/pending.jpg",
      url: ""
    },
    {
      id: 4,
      title: "Birthday Today",
      count: 12,
      image: "/Images/employeeBirthday.jpg",
      url: ""
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
      content: <EmployeeAttendanceSheet/>
    },
    {
      id: 3,
      active: true,
      title: "Employee Leaves",
      icon: FaUmbrellaBeach,
      content: <LeaveRegister/>
    },
    {
        id: 4,
        active: true,
        title: "Notifications",
        icon: FaBell,
        content: <TimeLine/>
      }
   ];

  return (
    <main>
      <CollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-red-400 border-b-2 border-b-slate-200 uppercase">
          Administration Section
        </h3>
        {/* Dashboard cards starts here */}
        <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-10 my-5">
         
          {cardData.map((data) => (
            <DashboardCard
              key={data.id}
              title={data.title}
              count={data.count}
              image={data.image}
              url={data.url}
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
