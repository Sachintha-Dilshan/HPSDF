import React from "react";
import HREmployeeCard from "../components/hr-employee-card";
import CollapseBar from "../../layouts/collapse-bar";
import { FloatingLabel, Select, Button } from "flowbite-react";
//import employees from "../../Data";
import EmployeeService from "../services/add-new-employee-service";
import { useNavigate } from "react-router-dom";

function HRSearchEmployees() {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = React.useState([]);
  const fetchAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        response.data.forEach((employee) => {
          EmployeeService.getImage(employee.nicNo).then((response) => {
            const imageUrl = URL.createObjectURL(response.data);
            employee.image = imageUrl;
            setEmployeeData((prev) => [...prev, employee]);
          });
        });
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          console.log(error.response.data.error);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    fetchAllEmployees();
  }, []);

  return (
    <main>
      {/* Collapse bar starts here */}
      <CollapseBar />
      {/* Collapse bae ends here */}

      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase mx-5">
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
          {employeeData.map((employee) => (
            <div onClick={() => {navigate("/HR/employeeProfile",{state: employee})}}>
              <HREmployeeCard
                imageUrl={employee.image}
                name={employee.nameWithInitials}
                designation={employee.designation}
                contact={employee.mobileNo}
                key={employee.nicNo}
              />
            </div>
          ))}
        </div>
        {/* Employees card grid ends here */}
      </div>
    </main>
  );
}

export default HRSearchEmployees;
