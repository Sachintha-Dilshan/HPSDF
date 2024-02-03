
'use client';


import { Table } from 'flowbite-react';

function HRLeaveRegister() {

  const leaveStatus = [
    {
      id: 1,
      name: "Mr.Sachintha Dilshan",
      casual: 10,
      vacation: 20,
      exVacation: 5,
      chp: 0,
      hp: 0,
      np: 0,
      dl: 2,
      total: 37
    },
    {
      id: 2,
      name: "Ms.Alice Johnson",
      casual: 5,
      vacation: 15,
      exVacation: 8,
      chp: 1,
      hp: 0,
      np: 0,
      dl: 1,
      total: 30
    },
    {
      id: 3,
      name: "Mr.John Doe",
      casual: 8,
      vacation: 18,
      exVacation: 3,
      chp: 0,
      hp: 1,
      np: 0,
      dl: 4,
      total: 34
    },
    // Add more objects as needed
  ];
  return (
    <div className="overflow-auto">
      <Table striped hoverable className="text-center">
        <Table.Head>
          <Table.HeadCell>Leave ID</Table.HeadCell>
          <Table.HeadCell>Employee Name</Table.HeadCell>
          <Table.HeadCell>Casual Leave</Table.HeadCell>
          <Table.HeadCell>Vaccation Leave</Table.HeadCell>
          <Table.HeadCell>Expired Vaccation Leave</Table.HeadCell>
          <Table.HeadCell>Commuted Half Pay</Table.HeadCell>
          <Table.HeadCell>Half Pay</Table.HeadCell>
          <Table.HeadCell>No Pay</Table.HeadCell>
          <Table.HeadCell>Duty Leave</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
        </Table.Head>


        <Table.Body className="divide-y">

        {leaveStatus.map((status) => (
        <Table.Row key={status.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
         
          <Table.Cell>{status.id}</Table.Cell>
          <Table.Cell>{status.name}</Table.Cell>
          <Table.Cell>{status.casual}</Table.Cell>
          <Table.Cell>{status.vacation}</Table.Cell>
          <Table.Cell>{status.exVacation}</Table.Cell>
          <Table.Cell>{status.chp}</Table.Cell>
          <Table.Cell>{status.hp}</Table.Cell>
          <Table.Cell>{status.np}</Table.Cell>
          <Table.Cell>{status.dl}</Table.Cell>
          <Table.Cell>{status.total}</Table.Cell>
        </Table.Row>
      ))}

        </Table.Body>
      </Table>
    </div>
  );
}

export default HRLeaveRegister;