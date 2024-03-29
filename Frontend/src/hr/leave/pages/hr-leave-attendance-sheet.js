import React from "react";
import LeaveCollapseBar from "../components/hr-leave-collapse-bar";

import { Table, Button, TextInput, Select } from "flowbite-react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineSave } from "react-icons/hi";

function HREmployeesAttendanceSheet() {
  const attendanceData = [
    {
      id: 1, // Leave ID
      name: "Mr. Sachintha Dilshan",
      date: "2024-01-25",
      present: true,
      timeIn: "09:00",
      timeOut: "17:30",
    },
    {
      id: 2, // Leave ID
      name: "Ms. Chani Ekanayake",
      date: "2024-01-25",
      present: false,
      remarks: "Sick leave",
    },
    {
      id: 3, // Leave ID
      name: "Ms. Praveen Sathsara",
      date: "2024-01-25",
      present: true,
      timeIn: "10:15",
      timeOut: "17:45",
      remarks: "Meeting delay",
    },
  ];

  const [edit, setEdit] = React.useState(true);
  function handleClick() {
    setEdit((prevEdit) => !prevEdit);
  }

  return (
    <main>
      {/* Collapse bar starts here */}
      <LeaveCollapseBar />
      {/* Collapse bae ends here */}

      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase mx-5">
          Employee Attendance
        </h3>

        <div className="flex justify-center md:gap-20 md:flex-row flex-col">
          <fieldset className="grid md:grid-cols-6 md:gap-10 grid-cols-2 gap-5 mb-10 border rounded-lg p-5">
            <span className="flex items-center text-slate-600">
              Present Today
            </span>
            <Button pill className="inline-block">
              <span className="flex justify-center flex-grow">105</span>
            </Button>
            <span className="flex items-center text-slate-600">
              Absent Today
            </span>
            <Button pill className="inline-block">
              <span className="flex justify-center flex-grow">12</span>
            </Button>
            <span className="flex items-center text-slate-600">Late Today</span>
            <Button pill className="inline-block">
              <span className="flex justify-center flex-grow">5</span>
            </Button>
          </fieldset>

          <fieldset className="grid grid-cols-1 mb-10  p-5">
           {edit && <Button  className="inline-block" color="blue" onClick={handleClick}><span className="flex justify-center flex-grow uppercase"><FaEdit className="mr-5" />edit</span></Button>} 
            {!edit && <Button  className="inline-block" color="success" onClick={handleClick}><span className="flex justify-center flex-grow uppercase"><HiOutlineSave className="mr-5"/>save</span></Button>}
          </fieldset>
        </div>

        <div className="overflow-auto">
          <Table striped hoverable>
            <Table.Head className="text-center">
              <Table.HeadCell>Leave ID</Table.HeadCell>
              <Table.HeadCell>Employee Name</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Time In</Table.HeadCell>
              <Table.HeadCell>Time Out</Table.HeadCell>
              <Table.HeadCell>Remarks</Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y">
              {attendanceData.map((data) => (
                <Table.Row
                  key={data.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {data.id}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {data.name}
                  </Table.Cell>
                  <Table.Cell>{data.date}</Table.Cell>
                  <Table.Cell>
                    <Select
                      id="status"
                      required
                      placeholder={data.present}
                      disabled={edit}
                    >
                      <option value={true}>Present</option>
                      <option value={false}>Absent</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      type="text"
                      id="disabledInput1"
                      placeholder={data.timeIn}
                      disabled={edit}
                      style={{ textAlign: "center" }}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      type="text"
                      id="disabledInput1"
                      placeholder={data.timeOut}
                      disabled={edit}
                      style={{ textAlign: "center" }}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      type="text"
                      id="disabledInput1"
                      placeholder={data.remarks}
                      disabled={edit}
                      style={{ textAlign: "center" }}
                    />
                  </Table.Cell>
                  
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </main>
  );
}

export default HREmployeesAttendanceSheet;
