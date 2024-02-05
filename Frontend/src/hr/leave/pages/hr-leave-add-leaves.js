import React from "react";
import LeaveCollapseBar from "../components/hr-leave-collapse-bar";
import LeaveTypeService from "../services/leave-type-service";

import { FloatingLabel, Table, Button } from "flowbite-react";

import { HiOutlineSave } from "react-icons/hi";
import { FaSyncAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function HRLeaveAddLeaves() {
  const [leaveName, setLeaveName] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    

    var data = {
      "leaveName" : leaveName
    };
    alert(data.leaveName);
    LeaveTypeService.createLeaveType(data)
    .then(response => {
      setLeaveName(response.data.leaveName);
      alert(response.data.leaveName);
    })
    .catch(e => {
      console.log(e);
    });
  }

  return (
    <main>
      <LeaveCollapseBar />
      <div className="flex flex-col  gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
          Change Leave Types
        </h3>
        {/* Personal details starts here */}
        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <form onSubmit={handleSubmit}>
          <fieldset className="border rounded-lg flex items-center justify-center md:flex-row  flex-col p-5 md:gap-10 gap-5 m-5">
            <legend className="text-slate-600">නිවාඩු තොරතුරු</legend>
            <FloatingLabel
              variant="filled"
              label="නිවාඩු වර්ගය"
              className="w-96"
              value={leaveName}
              onChange={e => setLeaveName(e.target.value)}
            />
            <Button className="uppercase w-52" type="submit">
              {" "}
              <HiOutlineSave className="mr-2 h-5 w-5" />
              Add Leave
            </Button>
            <Button className="uppercase w-52" color="purple">
              {" "}
              <FaSyncAlt className="mr-2 h-5 w-5" />
              Update Leave
            </Button>
            <Button className="uppercase w-52" color="failure">
              {" "}
              <MdDelete className="mr-2 h-5 w-5" /> Delete Leave
            </Button>
          </fieldset>
          </form>
        </div>
        <div className="overflow-auto flex justify-center">
          <Table striped hoverable>
            <Table.Head className="text-center">
            <Table.HeadCell>අනු අංකය</Table.HeadCell>
              <Table.HeadCell>නිවාඩු වර්ග</Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  1
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  අනියම් නිවාඩු
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </main>
  );
}

export default HRLeaveAddLeaves;
