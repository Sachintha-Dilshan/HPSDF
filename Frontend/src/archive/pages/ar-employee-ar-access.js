import React from 'react';
import { HiFaceSmile } from "react-icons/hi2";
import ARCheckedOutFileEmployeeTable from '../components/ar-checked-out-file-employee-table';
import ARFileCollapseBar from '../components/ar-file-collapse-bar';

function AREmployeeArchiveAccess() {
  return (
    <main>
      <ARFileCollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
         EMPLOYEE ARCHIVE ACCESS
        </h3>
        </div>

        <fieldset className="border rounded-lg grid lg:grid-cols-5 p-5 gap-5 m-5">
            <legend className="text-slate-600">Employee Details</legend>  
            <HiFaceSmile  className="w-40 h-40"/>
            <span className=" text-xl text-slate-500 font-semibold uppercase lg:mt-14 lg:-ml-20">
            MR.HARSHA GIHAN
            </span>
            </fieldset>      

            <div className="flex flex-col  lg:ml-20  mt-12">
        <ARCheckedOutFileEmployeeTable/>
    </div>

        </main>
  )
}

export default AREmployeeArchiveAccess