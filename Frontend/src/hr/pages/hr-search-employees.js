import React, { useState, useEffect } from "react";
import HREmployeeCard from "../components/hr-employee-card";
import HRCollapseBar from "../components/hr-collapse-bar";
import { FloatingLabel, Select, Button } from "flowbite-react";
//import employees from "../../Data";
import EmployeeService from "../services/add-new-employee-service";
import sectionService from "../services/add-section-service";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function HRSearchEmployees() {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState([]);
  const [sections, setSections] = useState([]);
  const [nicNo, setNicNo] = useState("");
  const [leaveId, setLeaveId] = useState("");
  const [sectionId, setSectionId] = useState("");

  const fetchAllEmployees = () => {
    setEmployeeData([]);
    EmployeeService.getEmployees()
      .then((response) => {
        setEmployeeData(response.data);
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
  };

  const sortEmployeesByNicNo = (nicNo) => {
    EmployeeService.sortEmployeesByNicNo(nicNo)
      .then((response) => {
        setEmployeeData(response.data);
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
  };

  const sortEmployeesByLeaveId = (leaveId) => {
    EmployeeService.sortEmployeesByLeaveId(leaveId)
      .then((response) => {
        setEmployeeData(response.data);
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
  };

  const fetchAllSections = () => {
    sectionService
      .getAllSections()
      .then((response) => {
        setSections(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchAllEmployees();
    fetchAllSections();
  }, []);

  useEffect(() => {
    if (sectionId) {
      EmployeeService.sortEmployeesBySection(sectionId)
        .then((response) => {
          setEmployeeData(response.data);
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
    }
  }, [sectionId]);

  useEffect(() => {
    if (nicNo) sortEmployeesByNicNo(nicNo);
  }, [nicNo]);

  useEffect(() => {
    if (leaveId) sortEmployeesByLeaveId(leaveId);
  }, [leaveId]);

  return (
    <main>
      {/* Collapse bar starts here */}
      <HRCollapseBar />
      {/* Collapse bae ends here */}

      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase mx-5">
          Search Employee
        </h3>

        {/* Search option starts here */}
        <div className="flex items-center justify-center">
          <fieldset className="grid grid-col-1 lg:grid-cols-4 gap-10 border rounded-lg p-5">
            <FloatingLabel
              variant="filled"
              label="National ID"
              value={nicNo}
              onChange={(event) => setNicNo(event.target.value)}
            />
            <FloatingLabel
              variant="filled"
              label="Leave Id"
              value={leaveId}
              onChange={(event) => setLeaveId(event.target.value)}
            />

            <Select
              id="sections"
              value={sectionId}
              onChange={(event) => setSectionId(event.target.value)}
            >
              <option value="">-----Select-----</option>
              {sections.map((section) => {
                return (
                  <option value={section.sectionId} key={section.sectionId}>
                    {section.sectionName}
                  </option>
                );
              })}
            </Select>
            <Button
              className="uppercase w-52 h-12"
              color="blue"
              onClick={fetchAllEmployees}
            >
              {" "}
              <FaSearch className="mr-2 h-5 w-5" />
              Search
            </Button>
          </fieldset>
        </div>
        {/* Search option ends here */}

        {/* Employees card grid starts here */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {employeeData &&
            employeeData.map((employee) => {
              return (
                <div
                  onClick={() => {
                    navigate("/HR/employeeProfile", { state: employee });
                  }}
                  key={employee[0]}
                >
                  <HREmployeeCard
                    nicNo={employee[0]}
                    name={employee[1]}
                    designation={employee[3]}
                    contact={employee[2]}
                    // key={employee.nicNo}
                  />
                </div>
              );
            })}
        </div>
        {/* Employees card grid ends here */}
      </div>
    </main>
  );
}

export default HRSearchEmployees;
