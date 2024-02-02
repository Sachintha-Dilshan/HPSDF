import React from "react";
import HREmployeeCard from "../components/hr-employee-card";
import CollapseBar from "../../layouts/collapse-bar";
import { FloatingLabel, Select, Button } from "flowbite-react";
import employees from "../../Data";

function HRSearchEmployees() {
  return (
    <main>
      {/* Collapse bar starts here */}
      <CollapseBar />
      {/* Collapse bae ends here */}

      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-red-400 border-b-2 border-b-slate-200 uppercase mx-5">
          Search Employee
        </h3>

        {/* Search option starts here */}
        <div className="flex items-center justify-center">
          <fieldset className="grid grid-col-1 lg:grid-cols-5 gap-10 border rounded-lg p-5">
            <FloatingLabel variant="filled" label="National ID" />
            <FloatingLabel variant="filled" label="File Number" />
            <FloatingLabel variant="filled" label="Leave ID" />
            <Select id="sections">
              <option className="text-center">-----Section-----</option>
              <option>Administration</option>
              <option>Development</option>
              <option>Account</option>
            </Select>
            <Button pill className="mx-10 h-12 uppercase">
              Search
            </Button>
          </fieldset>
        </div>
        {/* Search option ends here */}

        {/* Employees card grid starts here */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {employees.map((employee) => (
            <HREmployeeCard
              name={employee.name}
              designation={employee.designation}
              contact={employee.contactNo}
              key={employee.contactNo}
            />
          ))}
        </div>
        {/* Employees card grid ends here */}
      </div>
    </main>
  );
}

export default HRSearchEmployees;
