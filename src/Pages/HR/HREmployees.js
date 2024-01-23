import React from "react";
import Card from "../../Components/UI/Card";
import CollapseBar from "../../Components/UI/CollapseBar";
import { FloatingLabel, Select, Button } from "flowbite-react";

function HREmployees() {
  return (
    <main className="flex justify-between">
      {/* Collapse bar starts here */}
     <CollapseBar/>
      {/* Collapse bae ends here */}

      <div className="flex flex-col w-full">
        {/* Search option starts here */}
        <div className="flex items-center justify-center">
          <fieldset className="grid grid-col-1 lg:grid-cols-5 gap-10 border rounded-lg p-5">
            <legend className="uppercase text-base">filter</legend>
            <FloatingLabel variant="filled" label="National ID"/>
            <FloatingLabel variant="filled" label="File Number" />
            <FloatingLabel variant="filled" label="Leave ID" />
            <Select id="sections">
              <option selected className="text-center">-----Section-----</option>
              <option>Administration</option>
              <option>Development</option>
              <option>Account</option>
            </Select>
            <Button pill className="mx-10 h-12 uppercase">Search</Button>
          </fieldset>
         
        </div>
        {/* Search option ends here */}

        {/* Employees card grid starts here */}
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* Employees card grid ends here */}
      </div>
    </main>
  );
}

export default HREmployees;
