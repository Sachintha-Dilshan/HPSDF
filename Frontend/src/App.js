//import "./Styles/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
//import HRDashBoard from "./Pages/HR/HRDashBoard";
//import Report from "./Pages/Report";
//import Alert from "./Pages/Alert";
//import Profile from "./Pages/Profile";
//import Logout from "./Pages/LogOut";
import HRAddEmployee from "./Pages/HR/HRAddEmployee";
import HRDashboard from "./Pages/HR/HRDashboard";
import HREmployeeProfile from "./Pages/HR/HREmployeeProfile";
import HREmployees from "./Pages/HR/HREmployees";
import LoginPage from "./Pages/LoginPage";
import NoPage from "./Pages/NoPage";
//import JWTHome from "./Pages/JWTHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/" element={<Layout />}>
          <Route path="HR">
            <Route path="dashboard" element={<HRDashboard />} />
            <Route path="allEmployees" element={<HREmployees />} />
            <Route path="employeeProfile" element={<HREmployeeProfile />} />
            <Route path="addEmployee" element={<HRAddEmployee />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
