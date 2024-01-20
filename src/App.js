import "./Styles/App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Pages/Layout";
import HRDashBoard from "./Pages/HRDashBoard";
import Report from "./Pages/Report";
import Alert from "./Pages/Alert";
import Profile from "./Pages/Profile";
import Logout from "./Pages/Logout";
import NoPage from "./Pages/NoPage";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<HRDashBoard />} />
            <Route path="reports" element={<Report />} />
            <Route path="alerts" element={<Alert />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
