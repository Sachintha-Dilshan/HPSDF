import axios from "axios";
import AuthHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/";

const getAllSubjects = () => {
    return axios.get(API_URL + "subject", { headers: AuthHeader() });
  };
  
  const getSubject = id => {
    return axios.get(API_URL + `subjectById/${id}`, { headers: AuthHeader() });

    
  };
  
  const addSubject = data => {
    return axios.post(API_URL + "subject", data, { headers: AuthHeader() } );
  };
  
  const updateSubject = (data,id) => {
    return axios.put(API_URL + `subject/${id}`, data, { headers: AuthHeader() } );
  };
  
  const removeSubject = id => {
    return axios.delete(API_URL + `subject/${id}`, { headers: AuthHeader() });
  };
    


  
  const subjectService = {
    getAllSubjects,
    getSubject,
    addSubject,
    updateSubject,
    removeSubject
  };
  
  export default subjectService;
