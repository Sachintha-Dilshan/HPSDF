import React from "react";
import CollapseBar from "../../layouts/collapse-bar";
import { Table } from "flowbite-react";
import PopUp from "../components/hr-pop-up";

function HROnLeaveToday() {
  const leaveStatus = [
    {
      id: 1,
      "name": "ඒ.එම්.කේ. නාලිකා අබේකෝන් මිය",
      from: "2024-01-02",
      to: "2024-01-03",
      period: 2,
      type: "Casual Leave",
      reason: "Personal Matter",
    },
    {
      id: 2,
      "name": "ඊ.කේ.අයි.එදිරිසූරිය මයා",
      from: "2024-02-15",
      to: "2024-02-18",
      period: 4,
      type: "Sick Leave",
      reason: "Flu",
    },
    {
      id: 3,
      "name": "එම්.එස්.හිරිමුතුගොඩ මිය",
      from: "2024-03-25",
      to: "2024-03-25",
      period: 1,
      type: "Compensatory Off",
      reason: "Worked on Sunday",
    },
    {
      id: 4,
      "name": "එස්.ජී අංජුල සදරුවන් මයා",
      from: "2024-04-01",
      to: "2024-04-05",
      period: 5,
      type: "Privilege Leave",
      reason: "Vacation",
    },
    {
      id: 5,
      "name": "ජී. එච්. තිළිණි ප්‍රියංකර මිය",
      from: "2024-05-30",
      to: "2024-05-31",
      period: 2,
      type: "Maternity Leave",
      reason: "Childbirth",
    },
    {
      id: 6,
      "name": "රොෂාන්ත හෙට්ටිආරච්චි මයා",
      from: "2024-06-19",
      to: "2024-06-19",
      period: 1,
      type: "Paternity Leave",
      reason: "Childbirth",
    },
    {
      id: 7,
      "name": "එච්.ඩබ්.අජිත් කුමාර මයා",
      from: "2024-07-15",
      to: "2024-07-31",
      period: 17,
      type: "Study Leave",
      reason: "Pursuing further education",
    },
    {
      id: 8,
      "name": "එච්. ජී. ඩී. ප්‍රියන්තිකා මිය",
      from: "2024-08-15",
      to: "2024-08-15",
      period: 1,
      type: "Casual Leave",
      reason: "Personal Matter",
    },
    {
      id: 9,
      "name": "අයි. එස්. වික්‍රමතුංග මිය",
      from: "2024-09-03",
      to: "2024-09-05",
      period: 3,
      type: "Sick Leave",
      reason: "Doctor's appointment",
    },
    {
      id: 10,
      "name": "පී.එල් ප්‍රියංකා ලක්මිනි මිය",
      from: "2024-10-02",
      to: "2024-10-02",
      period: 1,
      type: "Compensatory Off",
      reason: "Worked on national holiday",
    },
    {
      id: 11,
      "name": "ඩි.එස්.වික්‍රමසිංහ මිය",
      from: "2024-11-11",
      to: "2024-11-15",
      period: 5,
      type: "Privilege Leave",
      reason: "Vacation",
    },
    {
      id: 12,
      "name": "කේ. එම්. ඩී. මධුමල්කා මිය",
      from: "2024-12-25",
      to: "2024-12-31",
      period: 7,
      type: "Casual Leave",
      reason: "Year-end vacation",
    },
  ];
  return (
    <main>
      {/* Collapse bar starts here */}
      <CollapseBar />
      {/* Collapse bae ends here */}

      <div className="flex flex-col gap-2 m-5">
        <h3 className="text-center text-lg text-red-400 border-b-2 border-b-slate-200 uppercase mx-5">
          Employees on leave today
        </h3>

        <div className="overflow-auto">
          <Table striped hoverable className="text-center shadow-lg">
            <Table.Head>
              <Table.HeadCell>Leave ID</Table.HeadCell>
              <Table.HeadCell>Employee Name</Table.HeadCell>
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
              {leaveStatus.map((status) => (
                <Table.Row
                  key={status.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{status.id}</Table.Cell>
                  <Table.Cell>{status.name}</Table.Cell>
                  <Table.Cell>{status.from}</Table.Cell>
                  <Table.Cell>{status.to}</Table.Cell>
                  <Table.Cell>{status.period}</Table.Cell>
                  <Table.Cell>{status.type}</Table.Cell>
                  <Table.Cell>{status.reason}</Table.Cell>
                  <Table.Cell>
                    <PopUp />
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

export default HROnLeaveToday;
