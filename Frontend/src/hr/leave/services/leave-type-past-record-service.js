import axios from "axios";
import AuthHeader from "../../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/leave/";

const getAll = () => {
  return axios.get(API_URL + "getAllPastRecords", { headers: AuthHeader() });
};

const getByLeaveId = (leaveId) => {
  return axios.get(API_URL + `getPastRecordByLeaveId/${leaveId}`, {
    headers: AuthHeader(),
  });
};

const add = (data) => {
  return axios.post(API_URL + "addPastRecord", data, { headers: AuthHeader() });
};

const update = (data) => {
  return axios.put(API_URL + "updatePastRecord", data, {
    headers: AuthHeader(),
  });
};

const remove = (leaveId, year) => {
  return axios.delete(API_URL + `deletePastRecord/${leaveId}/${year}`, {
    headers: AuthHeader(),
  });
};

const PastRecordService = {
  getAll,
  getByLeaveId,
  add,
  update,
  remove
};

export default PastRecordService;
