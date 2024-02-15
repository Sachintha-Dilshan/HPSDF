import { Route, Routes } from "react-router-dom";
import HRLeaveAddLeaves from "./hr/leave/pages/hr-leave-add-leaves";
import HREmployeesAttendanceSheet from "./hr/leave/pages/hr-leave-attendance-sheet";
import HRAddEmployee from "./hr/pages/hr-add-employee";
import HRDashboard from "./hr/pages/hr-dashboard";
import HREmployeeProfile from "./hr/pages/hr-employee-profile";
import HREmployeeLeaveRequest from "./hr/pages/hr-leave-request";
import HROnLeaveToday from "./hr/pages/hr-on-leave-today";
import HRSearchEmployees from "./hr/pages/hr-search-employees";
import PageLayout from "./layouts/page-layout";
import NoPage from "./pages/no-page";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*<Route path="/" element={<Login/>}/>*/}
        <Route path="/" element={<PageLayout />}>
          <Route path="HR">
            <Route path="dashboard" element={<HRDashboard/>} />
            <Route path="allEmployees" element={<HRSearchEmployees />} />
            <Route path="employeeProfile" element={<HREmployeeProfile />}/>
            <Route path="addEmployee" element={<HRAddEmployee />} />    
            <Route path="leaveRequest" element={<HREmployeeLeaveRequest />} /> 
            <Route path="onLeaveToday" element={<HROnLeaveToday />} />
            <Route path="employeesAttendance" element={<HREmployeesAttendanceSheet />} />
            <Route path="addLeaves" element={<HRLeaveAddLeaves />} /> 
          </Route>   
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
