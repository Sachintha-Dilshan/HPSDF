import axios from "axios";
import AuthHeader from "../../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/leave/";

const saveLeaveApplication = (data) => {
  return axios.post(API_URL + "saveLeaveApplication", data, {
    headers: AuthHeader(),
  });
};

const getLeaveChit = (applicationId) => {
  return axios.get(API_URL + `getLeaveChit/${applicationId}`, {
    headers: AuthHeader(),
  });
};

const LeaveApplicationService = {
  saveLeaveApplication,
  getLeaveChit
};

export default LeaveApplicationService;