import { Button, FloatingLabel, Label, Select } from "flowbite-react";
import React from 'react';
import { AiOutlineClear } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import ARFileCollapseBar from '../components/ar-file-collapse-bar';
import ARSearchFileTable from "../components/ar-search-file-table";

function ARSearchFile() {
  return (
    <main>
      <ARFileCollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
         SEARCH FILE
        </h3>
        </div>
        
        <fieldset className="border rounded-lg grid lg:grid-cols-7 p-5 gap-5 m-5">
            <legend className="text-slate-600">Checkout Files</legend>
            <FloatingLabel variant="filled" label="File Number" />
            <FloatingLabel variant="filled" label="File Name" />
            <FloatingLabel variant="filled" label="Year" />

{/*select section */}
            <div className="flex justify-center mt-3">
            <Label
                htmlFor="segment"
                value="Section"
                className="m-1 mb-2 text-slate-500 text-center text-base -mr-12 -mt-7"
                style={{ fontFamily: 'Arial, sans-serif',fontSize: '14px' }}
              />
              <Select id="segment" required>
                <option>-----Select-----</option>
                <option>ADMINISTRATION SECTION</option>
                <option>ACCOUNTS SECTION</option>
                <option>REVENUE SECTION</option>
                <option>DEVELOPMENT SECTION</option>
                <option>ENVIRONMENTAL/COMMUNITY DEVELOPMENT SECTION</option>
              </Select>
              </div>

{/*Select Subject */}
             <div className="flex mt-3">
            <Label
                htmlFor="segment"
                value="Subject"
                className="m-1 mb-2 text-slate-500 text-center text-base -mr-12 -mt-7"
                style={{ fontFamily: 'Arial, sans-serif',fontSize: '14px' }}
              />
              <Select id="segment" required>
                <option>-----Select-----</option>
              </Select>
  </div>
              {/*Search files button*/}
              <Button
                className="uppercase w-44 h-10 lg:mt-3"
                color="blue"
                //onClick={updateData}
              >
                <BiSearch className="mr-2 h-5 w-5" />
                Search File
              </Button>

               {/*Clear files button*/}
             <Button
                className="uppercase w-44 h-10 lg:mt-3"
                color="red"
                //onClick={updateData}
              >
                <AiOutlineClear className="mr-2 h-5 w-5" />
                Clear File
              </Button>

            
            </fieldset>

      <div className="flex flex-col  lg:ml-20  mt-12">
        <ARSearchFileTable/>
    </div>
        </main>
  )
}

export default ARSearchFile