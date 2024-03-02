import React, { useEffect, useState } from "react";
import LeaveCollapseBar from "../components/hr-leave-collapse-bar";
import LeaveTypeService from "../services/leave-type-service";
import EmployeeService from "../../services/add-new-employee-service";
import editLeaveOfficerService from "../services/leave-edit-leave-officers-service";

import {
  FloatingLabel,
  Select,
  Datepicker,
  Label,
  Button,
} from "flowbite-react";
import { IoSend } from "react-icons/io5";

function HRLeaveApplyLeave() {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [leaveType, setLeaveType] = useState("");
  const [employeeLeaveId, setEmployeeLeaveId] = useState("");
  const [employeeLeavePersonalData, setEmployeeLeavePersonalData] = useState(
    []
  );

  const [actingOfficerLeaveId, setActingOfficerLeaveId] = useState("");
  const [actingOfficerName, setActingOfficerName] = useState("");

  const [head, setHead] = useState("");
  const [supervisor, setSupervisor] = useState("");

  const [heads, setHeads] = useState([]);
  const [supervisors, setSupervisors] = useState([]);

  const getHeads = async () => {
    try {
      const response = await editLeaveOfficerService.getLeaveOfficers(
        "ROLE_HEAD"
      );
      setHeads(response.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        console.log(error.response.data.error);
      }
    }
  };

  const getSupervisors = async () => {
    try {
      const response = await editLeaveOfficerService.getLeaveOfficers(
        "ROLE_SUPERVISOR"
      );
      setSupervisors(response.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        console.log(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    getHeads();
    getSupervisors();
  }, []);

  useEffect(() => {
    if (employeeLeaveId === "") {
      setEmployeeLeavePersonalData([]);
    } else {
      EmployeeService.getEmployeeLeavePersonalData(employeeLeaveId)
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setEmployeeLeavePersonalData(response.data || []);
          } else {
            setEmployeeLeavePersonalData([]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [employeeLeaveId]);

  useEffect(() => {
    if (actingOfficerLeaveId === "") {
      setActingOfficerName("");
    } else {
      EmployeeService.getEmployeeName(actingOfficerLeaveId)
        .then((response) => {
          if (response.data && response.data.length > 0)
            setActingOfficerName(response.data || "");
          else setActingOfficerName("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [actingOfficerLeaveId]);

  useEffect(() => {
    LeaveTypeService.getAllLeaveTypes()
      .then((response) => {
        setLeaveTypes(response.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <LeaveCollapseBar />
      <div className="flex flex-col  gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
          Apply Leave
        </h3>
        <fieldset className="border rounded-lg p-5 md:gap-10 gap-5 m-5 grid lg:grid-cols-4">
          <FloatingLabel
            variant="filled"
            label="නිවාඩු අංකය"
            value={employeeLeaveId}
            onChange={(event) => setEmployeeLeaveId(event.target.value)}
          />
          <FloatingLabel
            variant="filled"
            label="නම"
            disabled
            value={
              employeeLeaveId &&
              employeeLeavePersonalData &&
              employeeLeavePersonalData.length > 0
                ? employeeLeavePersonalData[0][0]
                : ""
            }
            className="cursor-not-allowed bg-slate-200"
          />
          <FloatingLabel
            variant="filled"
            label="තනතුර"
            disabled
            className="cursor-not-allowed bg-slate-200"
            value={
              employeeLeaveId &&
              employeeLeavePersonalData &&
              employeeLeavePersonalData.length > 0
                ? employeeLeavePersonalData[0][1]
                : ""
            }
          />
          <FloatingLabel
            variant="filled"
            label="මුල් පත්වීමේ දිනය"
            className="cursor-not-allowed bg-slate-200"
            disabled
            value={
              employeeLeaveId &&
              employeeLeavePersonalData &&
              employeeLeavePersonalData.length > 0
                ? employeeLeavePersonalData[0][2]
                : ""
            }
          />
        </fieldset>

        <fieldset className="border rounded-lg p-5 md:gap-10 gap-5 m-5 grid lg:grid-cols-3 items-center">
          <legend className="text-slate-600">
            නිවාඩුව අනුමත කරන නිලධාරින්
          </legend>

          <fieldset className="border rounded-lg p-5 gap-5 grid">
            <legend className="text-slate-600">වැඩ බලන නිලධාරි</legend>
            <FloatingLabel
              variant="filled"
              label="නිවාඩු අංකය"
              value={actingOfficerLeaveId}
              name="leaveId"
              onChange={(event) => setActingOfficerLeaveId(event.target.value)}
            />

            <FloatingLabel
              id="supervisor"
              variant="filled"
              label="නම"
              className="cursor-not-allowed bg-slate-200"
              disabled
              name="employeeName"
              value={actingOfficerName}
            />
          </fieldset>

          <div>
            <Label
              htmlFor="leaveType"
              className="text-slate-500 text-base ml-2"
            >
              අධීක්ෂණ නිලධාරි
            </Label>
            <Select
              id="supervisor"
              name="supervisor"
              value={supervisor}
              onChange={(event) => setSupervisor(event.target.value)}
            >
              <option value="">-----Select-----</option>
              {supervisors.map((supervisor) => (
                <option value={supervisor[0]} key={supervisor[0]}>
                  {supervisor[1]}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label
              htmlFor="leaveType"
              className="text-slate-500 text-base ml-2"
            >
              දෙපාර්තමේන්තු ප්‍රධානි
            </Label>
            <Select
              id="head"
              name="head"
              value={head}
              onChange={(event) => setHead(event.target.value)}
            >
              <option value="">-----Select-----</option>
              {heads.map((head) => (
                <option value={head[0]} key={head[0]}>
                  {head[1]}
                </option>
              ))}
            </Select>
          </div>
        </fieldset>

        <fieldset className="border rounded-lg p-5 md:gap-10 gap-5 m-5 grid lg:grid-cols-3 items-center">
          <legend className="text-slate-600">නිවාඩු අයදුම් පත්‍රය</legend>
          <div>
            <Label
              htmlFor="leaveType"
              className="text-slate-500 text-base ml-2"
            >
              නිවාඩු වර්ගය
            </Label>
            <Select
              id="leaveType"
              name="leaveType"
              value={leaveType}
              onChange={(event) => setLeaveType(event.target.value)}
            >
              <option value="">-----Select-----</option>
              {leaveTypes.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.leaveType}
                  </option>
                );
              })}
            </Select>
          </div>

          <div>
            <Label
              htmlFor="leaveCommencingDate"
              className="text-slate-500 text-base ml-2"
            >
              නිවාඩු පටන් ගන්නා දිනය
            </Label>
            <Datepicker id="leaveCommencingDate" />
          </div>

          <div>
            <Label
              htmlFor="dateOfResumingDuties"
              className="text-slate-500 text-base ml-2"
            >
              නැවත සේවයට පැමිණෙන දිනය
            </Label>
            <Datepicker id="dateOfResumingDuties" />
          </div>
          <FloatingLabel
            variant="filled"
            label="නිවාඩු ඉල්ලා සිටින දින ගණන"
            type="number"
          />

          <FloatingLabel variant="filled" label="නිවාඩු ඉල්ලීමට හේතු" />
          <Button className="font-bold">
            <IoSend className="mr-4 h-5 w-5" />
            අයදුම් කරන්න
          </Button>
        </fieldset>
      </div>
    </main>
  );
}

export default HRLeaveApplyLeave;
