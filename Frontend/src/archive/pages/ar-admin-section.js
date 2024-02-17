import { Button } from "flowbite-react";
import React from 'react';
import { BiSearch } from "react-icons/bi";
import { FaSyncAlt } from "react-icons/fa";
import { HiOutlineSave } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import ARCheckedoutCard from "../components/ar-checkedout-card";
import ARFileCollapseBar from '../components/ar-file-collapse-bar';
function ARAdminSection() {
  return (
    <main>
      <ARFileCollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
         ADMINISTRATION SECTION
        </h3>
        <fieldset className="border rounded-lg flex items-center justify-center md:flex-row  flex-col p-5 md:gap-10 gap-5 m-5">
              <legend className="text-slate-600">FILE DETAILS</legend>
              
              {/*Add files button*/}
              <Button className="uppercase w-52" type="">
            
                <HiOutlineSave className="mr-2 h-5 w-5" />
                Add File
              </Button>
            
            {/*Search files button*/}
              <Button
                className="uppercase w-52"
                color="blue"
                //onClick={updateData}
              >
                <BiSearch className="mr-2 h-5 w-5" />
                Search File
              </Button>

            {/*Updates files button*/}
              <Button
                className="uppercase w-52"
                color="purple"
                //onClick={updateData}
              >
                <FaSyncAlt className="mr-2 h-5 w-5" />
                Update File
              </Button>

            {/*Delete files button*/}
              <Button
                className="uppercase w-52"
                color="failure"
                //onClick={deleteData}
              >
                
                <MdDelete className="mr-2 h-5 w-5" /> Delete File
              </Button>
            </fieldset>
            <div className="flex flex-col justify-center items-center mt-4">
            <ARCheckedoutCard/>
            </div>
        </div>
        </main>
  )
}

export default ARAdminSection