import axios from "axios";
import AuthHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/ar/";

const getAllFiles = () => {
    return axios.get(API_URL + "files", { headers: AuthHeader() });
  };
  const getRecentFiles = (sectionId) => {
    return axios.get(API_URL + `recentFiles/${sectionId}`, { headers: AuthHeader() });
  };
  
  
  const getFile = (sectionid,fileId) => {
    return axios.get(API_URL + `fileById/${sectionid}/${fileId}`, { headers: AuthHeader() });
  };

  
  const addFile = data => {
    return axios.post(API_URL + "file", data, { headers: AuthHeader() } );
  };
  
  const updateFile = (sectionId,fileId,data) => {
    return axios.put(API_URL + `file/${sectionId}/${fileId}`, data, { headers: AuthHeader() } );
  };
  
  const removeFile = (id,fileId) => {
    return axios.delete(API_URL + `file/${id}/${fileId}`, { headers: AuthHeader() });
  };
    

  const findByFileName = fileName => {
    return axios.get(API_URL + `fileByName/${fileName}`, { headers: AuthHeader() });
  };
  
  const fileService = {
    getAllFiles,
    getRecentFiles,
    getFile,
    addFile,
    updateFile,
    removeFile,
    findByFileName
  };
  
  export default fileService;