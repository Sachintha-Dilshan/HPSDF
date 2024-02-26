import React,{useState} from "react";
import sectionService from "../services/add-section-service";
import { Link } from "react-router-dom";

function ArHome(){
    const [sections,setSections]=useState([]);
    
    const fetchData=()=>{
        sectionService.getAllSections()
        .then((response)=>{
            setSections(response.data);
            console.log("check axios..........");
            console.log(response.data);
        })
        .catch((e)=>{
            console.log("hhhhhhhhhhhh");
            console.log(e);
        })
    }

    
    const ps=sections.map((section)=>{
        //const sectionJson=encodeURIComponent(JSON.stringify(section));
        
        return(
            
        <Link key={section.id} to={`/AR/fileCrud/${section.id}`}>
             <p >{section.sectionName}</p>
        </Link>
       
    )})
    React.useEffect(()=>{fetchData();},[])
    return(
        <div>
          <p>{ps.length}</p>
          {ps.length > 0 ? ps : <p>No sections available</p>}
        </div>
    )
    
    
    
}



export default ArHome;