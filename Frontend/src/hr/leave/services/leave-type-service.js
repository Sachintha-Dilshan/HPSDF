import axios from "axios";
import AuthHeader from "../../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/";

const getAllLeaveTypes = () => {
    return axios.get(API_URL + "leaveType", { headers: AuthHeader() });
  };
  
  const getLeaveType = id => {
    return axios.get(API_URL + `leaveTypeById/${id}`, { headers: AuthHeader() });
    
  };
  
  const createLeaveType = data => {
    return axios.post(API_URL + "leaveType", data, { headers: AuthHeader() } );
  };
  
  const updateLeaveType = (data,id) => {
    return axios.put(API_URL + `leaveType/${id}`, data, { headers: AuthHeader() } );
  };
  
  const removeLeaveType = id => {
    return axios.delete(API_URL + `leaveType/${id}`, { headers: AuthHeader() });
  };
    
  const findByLeaveNameContaining = leaveName => {
    return axios.get(API_URL + `leaveTypeContaining/${leaveName}`, { headers: AuthHeader() });
  };

  const findByLeaveName = leaveName => {
    return axios.get(API_URL + `leaveTypeByName/${leaveName}`, { headers: AuthHeader() });
  };
  
  const LeaveTypeService = {
    getAllLeaveTypes,
    getLeaveType,
    createLeaveType,
    updateLeaveType,
    removeLeaveType,
    findByLeaveName,
    findByLeaveNameContaining
  };
  
  export default LeaveTypeService;
