import axios from "axios";
import AuthHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/";

const getAllEmployees = () => {
  return axios.get(API_URL + "employees", { headers: AuthHeader() });
};

const getCount = () => {
  return axios.get(API_URL + "employeesCount", { headers: AuthHeader() });
};

const getEmployeeName = (leaveId) => {
  return axios.get(API_URL + `employeeName/${leaveId}`, { headers: AuthHeader() });
};

const getEmployeeLeavePersonalData = (leaveId) => {
  return axios.get(API_URL + `getEmployeeLeavePersonalData/${leaveId}`, { headers: AuthHeader() });
};

const getAllEmployeesData = () => {
  return axios.get(API_URL + "allEmployeesData", { headers: AuthHeader() });
};

const sortEmployeesBySection = (sectionId) => {
  return axios.get(API_URL + `sortEmployeesBySection/${sectionId}`, { headers: AuthHeader() });
};

const sortEmployeesByNicNo = (nicNo) => {
  return axios.get(API_URL + `sortEmployeesByNicNo/${nicNo}`, { headers: AuthHeader() });
};

const sortEmployeesByLeaveId = (leaveId) => {
  return axios.get(API_URL + `sortEmployeesByLeaveId/${leaveId}`, { headers: AuthHeader() });
};

const getEmployee = (nicNo) => {
  return axios.get(API_URL + `employee/${nicNo}`, { headers: AuthHeader() });
};

const getEmployeeAllDataByNic = (nicNo) => {
  return axios.get(API_URL + `employeeAllDataByNic/${nicNo}`, { headers: AuthHeader() });
};

const getEmployees = () => {
  return axios.get(API_URL + "allEmployees", { headers: AuthHeader() });
};

const addEmployee = (data) => {
  return axios.post(API_URL + "employee", data, { headers: AuthHeader() });
};

const updateEmployee = (data) => {
  return axios.put(API_URL + "employee", data, { headers: AuthHeader() });
};

const removeEmployee = (nicNo) => {
  return axios.delete(API_URL + `employee/${nicNo}`, { headers: AuthHeader() });
};

const uploadImage = (nicNo, imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  return axios.post(API_URL + `uploadImage/${nicNo}`, formData, {headers: AuthHeader()});
};

const getImage = (nicNo) => {
  return axios.get(API_URL + `getImage/${nicNo}`, {headers: AuthHeader(), responseType: "blob"});
};

const updateImage = (nicNo, imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  return axios.put(API_URL + `updateImage/${nicNo}`, formData, { headers: AuthHeader() });
};

const deleteImage = (nicNo) => {
  return axios.delete(API_URL + `deleteImage/${nicNo}`, { headers: AuthHeader() });
};

const EmployeeService = {
  getAllEmployees,
  getCount,
  getEmployeeName,
  getEmployeeLeavePersonalData,
  getAllEmployeesData,
  getEmployees,
  sortEmployeesBySection,
  sortEmployeesByNicNo,
  sortEmployeesByLeaveId,
  getEmployee,
  getEmployeeAllDataByNic,
  addEmployee,
  updateEmployee,
  removeEmployee,
  uploadImage,
  getImage,
  updateImage,
  deleteImage
};

export default EmployeeService;
