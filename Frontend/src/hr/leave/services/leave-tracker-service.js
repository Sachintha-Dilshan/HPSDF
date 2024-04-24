import axios from "axios";
import AuthHeader from "../../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/leave/";

const saveLeaveTrackingDetails = (data) => {
  return axios.post(API_URL + "saveLeaveTrackingDetails", data, {
    headers: AuthHeader(),
  });
};

const updateLeaveTrackerDetails = (data,id) => {
  return axios.put(API_URL + `updateLeaveTracker/${id}`, data, { headers: AuthHeader() } );
};

const getLeaveRequests = () => {
    return axios.get(API_URL + "getLeaveRequests", { headers: AuthHeader() });
};

const getLeaveTrackingData = (applicationId) => {
  return axios.get(API_URL + `getLeaveTrackingData/${applicationId}`, {
    headers: AuthHeader(),
  });
};

const LeaveTrackingService = {
  saveLeaveTrackingDetails,
  updateLeaveTrackerDetails,
  getLeaveRequests,
  getLeaveTrackingData
};

export default LeaveTrackingService;