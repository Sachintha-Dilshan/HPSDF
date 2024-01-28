//import "./Styles/App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Pages/Layout";
//import HRDashBoard from "./Pages/HR/HRDashBoard";
//import Report from "./Pages/Report";
import Alert from "./Pages/Alert";
import Profile from "./Pages/Profile";
import Logout from "./Pages/Logout";
import NoPage from "./Pages/NoPage";
import HREmployees from "./Pages/HR/HREmployees";
import HRAddEmployee from "./Pages/HR/HRAddEmployee";
import ARCAddFile from "./Pages/ARC/ARCAddFile";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<HREmployees/>} />
            <Route path="reports" element={<HRAddEmployee />} />
            <Route path="alerts" element={<Alert />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NoPage />} />
            <Route path="arcaddfile" element={<ARCAddFile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
