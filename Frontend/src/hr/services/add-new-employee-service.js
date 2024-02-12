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

const EmployeeService = {
  getAllEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  removeEmployee,
};

export default EmployeeService;
