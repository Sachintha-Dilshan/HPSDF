"use client";
import { Button, Table } from "flowbite-react";
import PopUp from "./hr-pop-up";
import HRLeaveStatusTimeLine from "./hr-leave-status-timeline";


function HRIndividualLeaveRegister() {

  const leaveStatus = [
    {
      id: 1,
      from: "2024-01-02",
      to: "2024-01-03",
      period: 2,
      type: "Casual Leave",
      reason: "Personal Matter",
    },
    {
      id: 2,
      from: "2024-02-15",
      to: "2024-02-18",
      period: 4,
      type: "Sick Leave",
      reason: "Flu",
    },
    {
      id: 3,
      from: "2024-03-25",
      to: "2024-03-25",
      period: 1,
      type: "Compensatory Off",
      reason: "Worked on Sunday",
    },
    {
      id: 4,
      from: "2024-04-01",
      to: "2024-04-05",
      period: 5,
      type: "Privilege Leave",
      reason: "Vacation",
    },
    {
      id: 5,
      from: "2024-05-30",
      to: "2024-05-31",
      period: 2,
      type: "Maternity Leave",
      reason: "Childbirth",
    },
    {
      id: 6,
      from: "2024-06-19",
      to: "2024-06-19",
      period: 1,
      type: "Paternity Leave",
      reason: "Childbirth",
    },
    {
      id: 7,
      from: "2024-07-15",
      to: "2024-07-31",
      period: 17,
      type: "Study Leave",
      reason: "Pursuing further education",
    },
    {
      id: 8,
      from: "2024-08-15",
      to: "2024-08-15",
      period: 1,
      type: "Casual Leave",
      reason: "Personal Matter",
    },
    {
      id: 9,
      from: "2024-09-03",
      to: "2024-09-05",
      period: 3,
      type: "Sick Leave",
      reason: "Doctor's appointment",
    },
    {
      id: 10,
      from: "2024-10-02",
      to: "2024-10-02",
      period: 1,
      type: "Compensatory Off",
      reason: "Worked on national holiday",
    },
    {
      id: 11,
      from: "2024-11-11",
      to: "2024-11-15",
      period: 5,
      type: "Privilege Leave",
      reason: "Vacation",
    },
    {
      id: 12,
      from: "2024-12-25",
      to: "2024-12-31",
      period: 7,
      type: "Casual Leave",
      reason: "Year-end vacation",
    }
];


  return (
    <div className="overflow-auto flex flex-col gap-10">
      <Table striped hoverable className="text-center">
        <Table.Head>
          <Table.HeadCell>From</Table.HeadCell>
          <Table.HeadCell>To</Table.HeadCell>
          <Table.HeadCell>Casual Leave</Table.HeadCell>
          <Table.HeadCell>Vaccation Leave</Table.HeadCell>
          <Table.HeadCell>Expired Vaccation Leave</Table.HeadCell>
          <Table.HeadCell>Commuted Half Pay</Table.HeadCell>
          <Table.HeadCell>Half Pay</Table.HeadCell>
          <Table.HeadCell>No Pay</Table.HeadCell>
          <Table.HeadCell>Duty Leave</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
            <Table.Cell>{"2024-01-01"}</Table.Cell>
            <Table.Cell>{"2024-02-02"}</Table.Cell>
            <Table.Cell>
              <Button pill className="inline-block">
                <span className="flex justify-center flex-grow">10</span>
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button pill className="inline-block">
                <span className="flex justify-center flex-grow">10</span>
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button pill className="inline-block">
                <span className="flex justify-center flex-grow">5</span>
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button pill className="inline-block">
                <span className="flex justify-center flex-grow">0</span>
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button pill className="inline-block">
                <span className="flex justify-center flex-grow">0</span>
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button pill className="inline-block">
                <span className="flex justify-center flex-grow">0</span>
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button pill className="inline-block">
                <span className="flex justify-center flex-grow">2</span>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table striped hoverable className="text-center shadow-lg">
        <Table.Head>
          <Table.HeadCell>From</Table.HeadCell>
          <Table.HeadCell>To</Table.HeadCell>
          <Table.HeadCell>Leave Period</Table.HeadCell>
          <Table.HeadCell>Leave Type</Table.HeadCell>
          <Table.HeadCell>Reason</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          s
          {leaveStatus.map((status) => (
            <Table.Row
              key={status.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{status.from}</Table.Cell>
              <Table.Cell>{status.to}</Table.Cell>
              <Table.Cell>{status.period}</Table.Cell>
              <Table.Cell>{status.type}</Table.Cell>
              <Table.Cell>{status.reason}</Table.Cell>
              <Table.Cell>
               <PopUp content={<HRLeaveStatusTimeLine/>}/>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default HRIndividualLeaveRegister;
