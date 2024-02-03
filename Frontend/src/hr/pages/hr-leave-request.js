import React from "react";
import CollapseBar from "../../layouts/collapse-bar";
import Tab from "../../components/tabs";
import HREmployeeLeaveChit from "../components/hr-employee-leave-chit";
import HRIndividualLeaveRegister from "../components/hr-employee-individual-leave-register";
import HREmployeeCard from "../components/hr-employee-card";
import HRLeaveStatusTimeLine from "../components/hr-leave-status-timeline";
import HREmployeeAttendantSheet from "../components/hr-employee-individual-attendance-sheet";
import {Button } from "flowbite-react";

import {
  FaCalendarMinus,
  FaClipboardList,
  FaCalendarCheck,
} from "react-icons/fa";

function HREmployeeLeaveRequest() {
  const employee = {
    name: "ඒ.එම්.කේ. නාලිකා අබේකෝන් මිය",
    address: "මහවත්ත, මොටාගෙදර, කැකනදුර",
    designation: "ලේකම්",
    contactNo: "0714412472",
  };

  const data = [
    {
      id: 1,
      active: true,
      title: "Leave Chit",
      icon: FaCalendarMinus,
      content: <HREmployeeLeaveChit />,
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
      <CollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-red-400 border-b-2 border-b-slate-200 uppercase mx-5">
          Leave Request
        </h3>
        <div className="flex md:flex-row flex-col items-center  flex-grow gap-10">
          <div>
            <HREmployeeCard
              name={employee.name}
              designation={employee.designation}
              contact={employee.contactNo}
              key={employee.contactNo}
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
