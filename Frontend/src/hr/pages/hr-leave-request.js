import React, { useEffect, useState } from "react";
import HRCollapseBar from "../components/hr-collapse-bar";
import Tab from "../../components/tabs";
import HREmployeeLeaveChit from "../components/hr-employee-leave-chit";
import HRIndividualLeaveRegister from "../components/hr-employee-individual-leave-register";
import HREmployeeCard from "../components/hr-employee-card";
import HRLeaveStatusTimeLine from "../components/hr-leave-status-timeline";
import HREmployeeAttendantSheet from "../components/hr-employee-individual-attendance-sheet";
import {Button } from "flowbite-react";
import LeaveApplicationService from "../leave/services/leave-application-service";
import EmployeeService from "../services/add-new-employee-service";

import {
  FaCalendarMinus,
  FaClipboardList,
  FaCalendarCheck,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

function HREmployeeLeaveRequest() {
  const location = useLocation();
  const applicationId = location.state.applicationId;
  const employeeNicNo = location.state.employeeNicNo;

  const [employeeData, setEmployeeData] = useState([]);

  const [leaveChit, setLeaveChit] = useState("");

  const getLeaveChit = async (applicationId) => 
  {
    try
    {
      const response = await LeaveApplicationService.getLeaveChit(applicationId);
      setLeaveChit(response.data[0]);
    }
    catch(error)
    {
      if (error.response && error.response.data && error.response.data.error) {
        console.log(error.response.data.error);
      }
    }
    
  }

  useEffect(() => {
    getLeaveChit(applicationId);
  }, [applicationId]);
  
  useEffect(() => {
    const getEmployeeData = async () => {
        try {
          const response = await EmployeeService.sortEmployeesByNicNo(employeeNicNo);
          setEmployeeData(response.data[0]);
        } catch (error) {
          if (error.response && error.response.data && error.response.data.error) {
            console.log(error.response.data.error);
          }
        }
    };
    getEmployeeData();
  }, [employeeNicNo]);

  
  const data = [
    {
      id: 1,
      active: true,
      title: "Leave Chit",
      icon: FaCalendarMinus,
      content: <HREmployeeLeaveChit data={leaveChit} />,
    },
    {
      id: 2,
      active: true,
      title: "Leave Register",
      icon: FaClipboardList,
      content: <HRIndividualLeaveRegister />,
    },
    {
      id: 3,
      active: true,
      title: "Employee Attendance ",
      icon: FaCalendarCheck,
      content: <HREmployeeAttendantSheet />,
    },
  ];
  return (
    <main>
      <HRCollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase mx-5">
          Leave Request
        </h3>
        <div className="flex md:flex-row flex-col items-center  flex-grow gap-10">
          <div>
            <HREmployeeCard
              nicNo={employeeData[0]}
              name={employeeData[1]}
              designation={employeeData[3]}
              contact={employeeData[2]}
            />
          </div>
          <div>
            {/* Leave tracking status goes here */}
            <HRLeaveStatusTimeLine/>
          </div>
          <div>
            <fieldset className="border rounded-lg p-5 flex gap-20">
              <legend>අධීක්ෂණ නිලධාරි අනුමැතිය</legend>
              <Button color="success" pill className="uppercase">
                Approve
              </Button>
              <Button color="failure" pill className="uppercase">
                Reject
              </Button>
            </fieldset>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <Tab para={data} />
        </div>
      </div>
    </main>
  );
}

export default HREmployeeLeaveRequest;
