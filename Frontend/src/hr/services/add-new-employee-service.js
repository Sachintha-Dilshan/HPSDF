import axios from "axios";
import AuthHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/";

const getAllEmployees = () => {
  return axios.get(API_URL + "employees", { headers: AuthHeader() });
};

const getEmployee = (nicNo) => {
  return axios.get(API_URL + `employee/${nicNo}`, { headers: AuthHeader() });
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

const EmployeeService = {
  getAllEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  removeEmployee,
  uploadImage,
  getImage,
};

export default EmployeeService;
