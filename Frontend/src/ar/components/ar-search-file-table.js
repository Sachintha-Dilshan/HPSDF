import { Button, Table } from 'flowbite-react';
import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function ARSearchFileTable(props) {
  const navigate=useNavigate();
   const searchedFiles=props.file;
  

    const leaveStatus = [
        {
            id: 1,
            name: "Mr.Sachintha Dilshan",
            type: "Sick leave",
            acting: true,
            supervisor: true,
            hod: false
        },
        {
            id: 2,
            name: "Ms.Chani Ekanayake",
            type: "Casual Leave",
            acting: true,
            supervisor: false,
            hod: false
        },
        {
            id: 3,
            name: "Ms.Praveen Sathsara",
            type: "Casual Leave",
            acting: false,
            supervisor: false,
            hod: false
        }
    ];
  return (
    <div className="overflow-auto w-960">
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>File Number</Table.HeadCell>
          <Table.HeadCell>File Name</Table.HeadCell>
          <Table.HeadCell>Section</Table.HeadCell>
          <Table.HeadCell>Subject</Table.HeadCell>
          <Table.HeadCell>Year</Table.HeadCell>
         <Table.HeadCell>Location</Table.HeadCell>
         <Table.HeadCell></Table.HeadCell>
            
        </Table.Head>


        <Table.Body className="divide-y">

        {searchedFiles && searchedFiles.map((searchedFile) => (
        <Table.Row key={searchedFile.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {searchedFile.fileNumber}
          </Table.Cell>
          <Table.Cell>{searchedFile.fileName}</Table.Cell>
          <Table.Cell >{searchedFile.sectionName  }</Table.Cell>
          <Table.Cell >{searchedFile.subjectName}</Table.Cell>
          <Table.Cell >{searchedFile.year} </Table.Cell>
          
              {/* const handleClick = () => {
                navigate("/profile-two", { state: data });
              };
           */}
          <Table.Cell>
            {/* <Link  to={"/AR/fileLocation"} state={{fromSearch:{searchedFile}}}> */}
              <Button onClick={()=>{navigate("/AR/fileLocation",{state: searchedFile})}}>View</Button>
            {/* </Link> */}
          </Table.Cell>
          <Table.Cell >{searchedFile.checkedOut?"Checked Out":""} </Table.Cell>
          {/*  */}
        </Table.Row>
      ))}

        </Table.Body>
      </Table>
    </div>
  );
}

export default ARSearchFileTable