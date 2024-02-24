import { Button, FloatingLabel, Label, Select } from "flowbite-react";
import React from 'react';
import { GiBookshelf } from "react-icons/gi";
import { ImDrawer } from "react-icons/im";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import ARFileCollapseBar from '../components/ar-file-collapse-bar';
import ARFileLocationCard from "../components/ar-file-location-card";

function ARFileLocation() {

    const cardData = [
        {
            id: 1,
            title: "RACK NUMBER",
            count: 5,
            Icon: <GiBookshelf  className="w-40 h-40"/>
          },
        {
          id: 2,
          title: "BOX NUMBER",
          count: 2,
          Icon: <ImDrawer  className="w-40 h-40"/>
        },
        {
          id: 3,
          title: "FILE INDEX",
          count: 4,
          Icon: <VscFileSubmodule className="w-40 h-40" />
        },
        
      ];

  return (
    <main>
      <ARFileCollapseBar />
      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
         FILE LOCATION
        </h3>
        </div>

        
        <fieldset className="border rounded-lg grid lg:grid-cols-4 p-5 gap-5 m-5">
            <legend className="text-slate-600">Search File</legend>
            <FloatingLabel variant="filled" label="File Number"/>
            <FloatingLabel variant="filled" label="File Name" />
            <FloatingLabel variant="filled" label="Year" />
 
      <div className="flex justify-center mt-3" >
            <Label 
                htmlFor="segment"
                value="Subject"
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
              </fieldset>

              {/* cards starts here */}
        <div className="grid col-span-2 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-16 my-5 mx-10 mt-10 sm:ml-4">
          {cardData.map((data) => (
            <ARFileLocationCard 
              key={data.id}
              title={data.title}
              count={data.count}
              Icon={data.Icon}
            />
          ))}
        </div>

        <div>
        <fieldset className="border rounded-lg  lg:grid-cols-2 flex items-center justify-center md:flex-row  flex-col p-5 md:gap-10 gap-5 m-5">
              {/*<legend className="text-slate-600">FILE DETAILS</legend>*/}
              
                {/*Check out files button*/}
              <Button
                className="uppercase w-52"
                color="green"
                //onClick={updateData}
              >
                <MdOutlineShoppingCartCheckout  className="mr-2 h-5 w-5" />
                Check Out
              </Button>

              <FloatingLabel variant="filled" label=""/>
              </fieldset>
        </div>
       
        </main>
  )
}

export default ARFileLocation