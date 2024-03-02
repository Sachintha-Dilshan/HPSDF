import axios from "axios";
import AuthHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/ar/";



const findByFileName = fileName => {
  return axios.get(API_URL + `fileByName/${fileName}`, { headers: AuthHeader() });
};

const getAllFiles = () => {
    return axios.get(API_URL + "files", { headers: AuthHeader() });
  };
  const getRecentFiles = (sectionId) => {
    return axios.get(API_URL + `recentFiles/${sectionId}`, { headers: AuthHeader() });
  };
  
  
  const getFile = (sectionid,fileId) => {
    return axios.get(API_URL + `fileById/${sectionid}/${fileId}`, { headers: AuthHeader() });
  };

  const getCheckedoutFiles=(file)=>{
    let url=API_URL + "checkedOutFiles?";
    if(file.fileNumber!==undefined && file.fileNumber!=="" && file.fileNumber!==null){
      url+=`&fileNumber=${file.fileNumber}`;
    }
    if(file.fileName!==undefined && file.fileName!=="" && file.fileName!==null){
      url+=`&fileName=${file.fileName}`;
    }
    if(file.section!==undefined && file.section!=="" && file.section!==null){
      url+=`&sectionName=${file.section}`;
    }
    if(file.subject!==undefined && file.subject!=="" && file.subject!==null){
      url+=`&subjectName=${file.subject}`;
    }
    if(file.employeeId!==undefined && file.employeeId!=="" && file.employeeId!==null){
      url+=`&employeeNIC=${file.employeeId}`;
    }
    console.log(url);
    return axios.get(url,{headers:AuthHeader()});
    
  }
  // @RequestParam(required = false) String fileNumber,
  // @RequestParam(required = false) String fileName,
  // @RequestParam(required = false) String sectionName,
  // @RequestParam(required = false) String subjectName,
  // @RequestParam(required = false) String employeeNIC

// fileNumber:"",        
// fileName:"",
// section:"",
// subject:"",
// employeeId:""


const getCheckedoutFilesEmployee=(employeeId)=>{
  return axios.get(API_URL+`checkedOutFiles?&employeeNIC=${employeeId}`,{headers:AuthHeader()});

}
const getFileCheckedOutCount = ()=> {
  return axios.get(API_URL + `checkedOutFilesCount`, { headers: AuthHeader() });
};
  const addFile = data => {
    return axios.post(API_URL + "file", data, { headers: AuthHeader() } );
  };
  
  const updateFile = (sectionId,fileId,data) => {
    return axios.put(API_URL + `file/${sectionId}/${fileId}`, data, { headers: AuthHeader() } );
  };

  const checkInFile=(fileId)=>{
    return axios.put(API_URL+`checkInFile/${fileId}`,{ headers: AuthHeader() } )
  }
  
  const removeFile = (id,fileId) => {
    return axios.delete(API_URL + `file/${id}/${fileId}`, { headers: AuthHeader() });
  };
    

  
  
  const fileService = {
    getAllFiles,
    getRecentFiles,
    getFile,
    getCheckedoutFiles,
    getFileCheckedOutCount,
    addFile,
    updateFile,
    checkInFile,
    removeFile,
    findByFileName
  };
  
  export default fileService;