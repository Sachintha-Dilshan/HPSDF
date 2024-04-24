import React from 'react';
import {Button, FloatingLabel } from 'flowbite-react';
import { BiSearch } from "react-icons/bi";
import { useState } from 'react';
import fileService from '../services/add-file-service';
import { HiFaceSmile } from "react-icons/hi2";
import ARCheckedOutFileEmployeeTable from '../components/ar-checked-out-file-employee-table';
import ARFileCollapseBar from '../components/ar-file-collapse-bar';
import { useLocation } from 'react-router-dom';

function AREmployeeArchiveAccess() {

  const location =useLocation();
  const initialemployeeId=location.state;

  
  const [employeeId,setEmployeeId]=useState("");
  const [checkedOutFiles,setCheckedOutFiles]=useState([]);
  const searchData=async()=>{
    try{
      const response=await fileService.getCheckedoutFilesEmployee(employeeId);
      setCheckedOutFiles(response.data);
      console.log(response.data);
      console.log(initialemployeeId);
  
    }catch(error){
      console.log('Error fetching checkout files:'+error.response.data);
    }
  }
  const initialSearchData=async()=>{
    try{
      if(location.state){
        setEmployeeId(prev=>location.state.employeeId);
        console.log(employeeId);
        const response=await fileService.getCheckedoutFilesEmployee(location.state.employeeId);
        setCheckedOutFiles(response.data);
        // console.log("initial rendering");
        // console.log(response.data);
      }   
    }catch(error){
      console.log('error initially fetching checkout files'+error.response.data);
    }
  }
  React.useEffect(()=>{initialSearchData()},[]);

  const handleEmployeeId=(event)=>{
    setEmployeeId(event.target.value);
  }
  return (
    <main>
      <ARFileCollapseBar />
      
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
         EMPLOYEE ARCHIVE ACCESS
        </h3>
        </div>

        <fieldset className="border rounded-lg grid lg:grid-cols-6 p-5 gap-5 m-5">
            <legend className="text-slate-600 uppercase">Employee Details</legend>  
            <HiFaceSmile  className="w-40 h-40 "/>
            <span className=" text-xl text-slate-500 font-semibold uppercase lg:mt-14 lg:ml-5 ">
              {checkedOutFiles.length>0?checkedOutFiles[0].employeeFullName:"Employee Name"}
            </span>
            
            {/* <FloatingLabel variant="filled" label="Employee Id" name="Employee ID" className="col-start-4 col-end-6" /> */}
            <div className="col-start-5 col-end-6..."><FloatingLabel variant="filled" label="Employee Id" name="employeeId" onChange={handleEmployeeId} value={employeeId}/></div>
           <Button
                className="uppercase w-44 h-10 lg:mt-3"
                color="blue"
                onClick={searchData}
              >
                <BiSearch className="mr-2 h-5 w-5" />
                Search File
              </Button>
            </fieldset>      

            <div className="flex flex-col  lg:ml-20  mt-12">
        <ARCheckedOutFileEmployeeTable files={checkedOutFiles} searchFile={searchData}/>
    </div>

        </main>
  )
}

export default AREmployeeArchiveAccess