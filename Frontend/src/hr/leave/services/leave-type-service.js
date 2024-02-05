import axios from "axios";
import AuthHeader from "../../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/";

const getAllLeaveTypes = () => {
    return axios.get(API_URL + "leave", { headers: AuthHeader() });
  };
  
  const getLeaveType = id => {
    return axios.get(API_URL + `leave/${id}`, { headers: AuthHeader() });
    
  };
  
  const createLeaveType = data => {
    return axios.post(API_URL + "leave", data, { headers: AuthHeader() } );
  };
  
  const updateLeaveType = (id, data) => {
    return axios.put(API_URL + `leave/${id}`, data, { headers: AuthHeader() } );
  };
  
  const removeLeaveType = id => {
    return axios.delete(API_URL + `leave/${id}`, { headers: AuthHeader() });
  };
  
  const removeAllLeaveTypes = () => {
    return axios.delete(API_URL + "leave", { headers: AuthHeader() });
  };
  
  const findByLeaveName = leaveName => {
    return axios.get(API_URL + `/leave?leaveName=${leaveName}`, { headers: AuthHeader() });
  };
  
  const LeaveTypeService = {
    getAllLeaveTypes,
    getLeaveType,
    createLeaveType,
    updateLeaveType,
    removeLeaveType,
    removeAllLeaveTypes,
    findByLeaveName
  };
  
  export default LeaveTypeService;
