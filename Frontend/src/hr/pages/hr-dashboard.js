import React, { useState,useEffect } from "react";
import HRCollapseBar from "../components/hr-collapse-bar";
import HRDashboardCard from "../components/hr-dashboard-card";
import Tab from "../../components/tabs";
import HRLeaveTracker from "../components/hr-employee-leave-tracker";
import TimeLine from "../../components/time-line";
import { FaCalendarCheck, FaUmbrellaBeach, FaCheckDouble,FaBell} from "react-icons/fa";
import HRAttendanceTracker from "../components/hr-employee-attendance-sheet";
import HRLeaveRegister from "../components/hr-employee-leave-register";
import EmployeeService from "../services/add-new-employee-service";



function HRDashboard() {
  const [employeeCount, setEmployeeCount] = useState(0);
  useEffect(() => {
      EmployeeService.getCount()
      .then((response) => {
        setEmployeeCount(response.data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          console.log(error.response.data.error);
        }
      });
    }, []);
  const cardData = [
    {
      id: 1,
      title: "Total Employees",
      count: employeeCount,
      image: "/Images/total-employees.jpg",
      url: "/HR/allEmployees"
    },
    {
      id: 2,
      title: "On Leave Today",
      count: 12,
      image: "/Images/on-leave.webp",
      url: "/HR/onLeaveToday"
    },
    {
      id: 3,
      title: "Leave requests",
      count: 5,
      image: "/Images/leave-request.jpg",
      url: "/HR/leaveRequest"
    },
    {
      id: 4,
      title: "Birthday Today",
      count: 12,
      image: "/Images/employee-birthday.jpg",
      url: ""
    },
  ];

  const tabData = [
    {
      id: 1 ,
      active: true,
      title: "Track Leaves",
      icon: FaCheckDouble,
      content: <HRLeaveTracker/> 
    },
    {
      id: 2,
      active: true,
      title: "Employee Attendance ",
      icon: FaCalendarCheck,
      content: <HRAttendanceTracker/>
    },
    {
      id: 3,
      active: true,
      title: "Employee Leaves",
      icon: FaUmbrellaBeach,
      content: <HRLeaveRegister/>
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
      <HRCollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
          Administration Section
        </h3>
        {/* Dashboard cards starts here */}
        <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-10 my-5">
         
          {cardData.map((data) => (
            <HRDashboardCard
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
