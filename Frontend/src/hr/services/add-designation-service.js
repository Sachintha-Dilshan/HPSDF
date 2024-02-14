import axios from "axios";
import AuthHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/hr/";

const getAllDesignations = () => {
    return axios.get(API_URL + "designation", { headers: AuthHeader() });
  };
  
  const getDesignation = id => {
    return axios.get(API_URL + `designationById/${id}`, { headers: AuthHeader() });
    
  };
  
  const addDesignation = data => {
    return axios.post(API_URL + "designation", data, { headers: AuthHeader() } );
  };
  
  const updateDesignation = (data,id) => {
    return axios.put(API_URL + `designation/${id}`, data, { headers: AuthHeader() } );
  };
  
  const removeDesignation = id => {
    return axios.delete(API_URL + `designation/${id}`, { headers: AuthHeader() });
  };
    

  const findByDesignationName = designationName => {
    return axios.get(API_URL + `designationByName/${designationName}`, { headers: AuthHeader() });
  };
  
  const designationService = {
    getAllDesignations,
    getDesignation,
    addDesignation,
    updateDesignation,
    removeDesignation,
    findByDesignationName
  };
  
  export default designationService;
