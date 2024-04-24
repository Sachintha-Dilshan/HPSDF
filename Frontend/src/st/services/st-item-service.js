import axios from "axios";
import AuthHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/auth/st/";

const getAllItems = () => {
    return axios.get(API_URL + "items", { headers: AuthHeader() });
  };
  
  // const getServiceSector = id => {
  //   return axios.get(API_URL + `serviceSectorById/${id}`, { headers: AuthHeader() });
    
  // };
  
  const saveItem = data => {
  
    return axios.post(API_URL + "item", data, { headers: AuthHeader() } );
  };
  
  // const updateServiceSector = (data,id) => {
  //   return axios.put(API_URL + `serviceSector/${id}`, data, { headers: AuthHeader() } );
  // };
  
  // const removeServiceSector = id => {
  //   return axios.delete(API_URL + `serviceSector/${id}`, { headers: AuthHeader() });
  // };
    

  // const findByServiceSectorName = serviceSectorName => {
  //   return axios.get(API_URL + `serviceSectorByName/${serviceSectorName}`, { headers: AuthHeader() });
  // };
  
  const ItemService = {
    getAllItems,
    saveItem,
    // addServiceSector,
    // updateServiceSector,
    // removeServiceSector,
    // findByServiceSectorName
  };
  
  export default ItemService;
