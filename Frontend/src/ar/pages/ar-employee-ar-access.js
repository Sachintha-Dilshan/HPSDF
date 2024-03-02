import React from 'react';
import { useState } from 'react';
import fileService from '../services/add-file-service';
import { HiFaceSmile } from "react-icons/hi2";
import ARCheckedOutFileEmployeeTable from '../components/ar-checked-out-file-employee-table';
import ARFileCollapseBar from '../components/ar-file-collapse-bar';

function AREmployeeArchiveAccess() {
  const employeeId="200024800765";
  const employeeName="MR.HARSHA GIHAN";
  
  const [checkedOutFiles,setCheckedOutFiles]=useState([]);

  const searchData=async()=>{
    try{
      const response=await fileService.getCheckedoutFiles(employeeId);
      setCheckedOutFiles(response.data);
      console.log(response.data);
      console.log("last check");
  
    }catch(error){
      console.log('Error fetching checkout files:'+error.response.data);
    }
  }
  React.useEffect(()=>{searchData()},[]);
  return (
    <main>
      <ARFileCollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
         EMPLOYEE ARCHIVE ACCESS
        </h3>
        </div>

        <fieldset className="border rounded-lg grid lg:grid-cols-5 p-5 gap-5 m-5">
            <legend className="text-slate-600 uppercase">Employee Details</legend>  
            <HiFaceSmile  className="w-40 h-40"/>
            <span className=" text-xl text-slate-500 font-semibold uppercase lg:mt-14 lg:-ml-20">
              {employeeName}
            </span>
            </fieldset>      

            <div className="flex flex-col  lg:ml-20  mt-12">
        <ARCheckedOutFileEmployeeTable files={checkedOutFiles} searchFile={searchData}/>
    </div>

        </main>
  )
}

export default AREmployeeArchiveAccess