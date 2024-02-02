import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/page-layout";
import HRSearchEmployees from "./hr/pages/hr-search-employees";
import HRAddEmployee from "./hr/pages/hr-add-employee";
import HREmployeeProfile from "./hr/pages/hr-employee-profile";
import HRDashboard from "./hr/pages/hr-dashboard";
import Login from "./pages/login";
import NoPage from "./pages/no-page";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<PageLayout />}>
          <Route path="HR">
            <Route path="dashboard" element={<HRDashboard />} />
            <Route path="allEmployees" element={<HRSearchEmployees />} />
            <Route path="employeeProfile" element={<HREmployeeProfile />}/>
            <Route path="addEmployee" element={<HRAddEmployee />} />    
          </Route>   
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
