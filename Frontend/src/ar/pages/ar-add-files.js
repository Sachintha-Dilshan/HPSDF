import fileService from "../services/add-file-service";
import sectionService from "../services/add-section-service";
import rackService from "../services/add-rack-service";
import React, { useState } from "react";
import {
    FloatingLabel,
    Select,
    Label,
    Radio,
    TextInput,
    Modal,
    Button,
    FileInput,
    Avatar,
    Spinner,
    Table,
  } from "flowbite-react";
  import { HiMail, HiOutlineSave,HiDocumentDuplicate } from "react-icons/hi";
  import {
    FaPhone,
    FaCalendar,
    FaSearch,
    FaSyncAlt,
    FaEraser,
    FaSearchMinus
  } from "react-icons/fa";
  
  import {
    MdDelete,
    MdDoneOutline,
    MdRadioButtonUnchecked,
    MdError,
  } from "react-icons/md";
  import { IoIosWarning } from "react-icons/io";
import { useParams } from "react-router-dom";
import subjectService from "../services/add-subject-service";


  const FileCrud=(props)=>{
    const {id}=useParams();
    const [section1,setSection]=useState({});
    const [racks,setRacks]=useState([]);
    const [subjects,setSubjects]=useState([]);
    const [recentFiles,setRecentFiles]=useState([]);
    const [isUpdatable,setIsUpdatable]=useState(false);
    

    const [message, setMessage] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [show, setShow] = React.useState(false);

    const [file,changeFile]=useState({
      fileId:"",
      fileNumber:"",
      fileName:"",
      section:id,
      subject:"",
      year:"",
      rackNumber:"",
      boxNumber:"",
      fileIndex:""
  })
  const filePayload = {
    fileNumber: file.fileNumber,
    fileName: file.fileName,
    archiveSectionId: file.section,
    archiveSubjectId: file.subject,
    year: file.year,
    rackId: file.rackNumber,
    boxNumber: file.boxNumber,
    fileIndex: file.fileIndex
  };
    
    const fetchSectionData=()=>{
      sectionService.getSectionById(id)
      .then((response)=>{
          setSection(response.data);
          console.log("successfully fetch data to the ar-add-files(getSectionById)");
          console.log(response.data);
      })
      .catch((e)=>{
          console.log("error when fetching data to the ar-add-files(getSectionById)");
          console.log(e);
      })
  }
  const fetchRackData=()=>{
    rackService.getAllRacks()
    .then((response)=>{
        setRacks(response.data);
        console.log("successfully fetch data to the ar-add-files(getAllRacks)");
        console.log(response.data);
    })
    .catch((e)=>{
        console.log("error when fetching data to the ar-add-files(getAllRacks)");
        console.log(e);
    })
}
const fetchSubjectsData=()=>{
  subjectService.getSubjectsBySectionId(id)
  .then((response)=>{
      setSubjects(response.data);
      console.log("successfully fetch data to the ar-add-files(getSubjectsBySectionId)");
      console.log(response.data);
  })
  .catch((e)=>{
      console.log("error when fetching data to the ar-add-files(getSectionById)");
      console.log(e);
  })
}
const fetchRecentFilesData=()=>{
      fileService.getRecentFiles(id)
      .then((response)=>{
        console.log("successfully fetch the recent files..");
        setRecentFiles(response.data);
        console.log(response.data);
        
        
      })
      .catch((e)=>{
        console.log("error when calling recent 5 Files...");
        console.log(e);
      })
}
    
  React.useEffect(()=>{
    fetchSectionData();
    fetchRackData();
    fetchSubjectsData();
    fetchRecentFilesData();
  },[])

  

  
    

     function handleChange(event){
        console.log(file);
        changeFile({
            ...file,
            [event.target.name]:event.target.value
        })
        
    }
    const searchFile =async () => {
      if (file.fileId=== "") {
        setMessage("File Id is Required");
        setTitle("Empty");
        setOpenModal(true);
      }else{
        try {        
          const response = await fileService.getFile(id,file.fileId);
          const resFile=response.data;
          console.log(resFile);
          changeFile((prev)=>({
              ...file,
              fileNumber:resFile.fileNumber,
              fileName:resFile.fileName != null ? resFile.fileName:"" ,
              section:resFile.archiveSectionId,
              subject:resFile.archiveSubjectId!=null? resFile.archiveSubjectId: "",
              year:resFile.year,
              rackNumber:resFile.rackId!=null? resFile.rackId: "",
              boxNumber:resFile.boxNumber ,
              fileIndex:resFile.fileIndex   
          }))
         setIsUpdatable(true);
          
  
      } catch (error) {
          //console.error('Error adding file:', error);
          if (error.response && error.response.status === 404) {
            setMessage(error.response.data);
            setTitle("Not Found");
            setOpenModal(true);
            console.log(error.response);
            // Handle conflict error here if needed
        }
  
          // Handle the error as needed, e.g., show an error message to the user
      }
      }
     
      
  }
  const addFile=async () => {
    // if (file.fileNumber=== "") {
    //   setMessage("FILE number is required"); // to be removed  //Empty to Required
    //   setTitle("Empty");
    //   setOpenModal(true);
    // } else 
    if (file.fileName === "") {
      setMessage("FILE NAME IS REQUIRED");
      setTitle("Empty");
      setOpenModal(true);
    } else if (file.subject === "") {
      setMessage("SUBJECT IS NOT SELECTED");
      setTitle("Empty");
      setOpenModal(true);
    } else if (file.year === "") {
      setMessage("YEAR IS REQUIRED");
      setTitle("Empty");
      setOpenModal(true);
    } else if (file.rackNumber === "") {
      setMessage("RACK NUMBER IS NOT SELECTED");
      setTitle("Empty");
      setOpenModal(true);
    } else if (file.boxNumber === "") {
      setMessage("BOX NUMBER IS REQUIRED");
      setTitle("Empty");
      setOpenModal(true);

    } else if (file.fileIndex === "") {
      setMessage("FILE INDEX IS EMPTY.");
      setTitle("Empty");
      setOpenModal(true);
    } else{
      try {
       
        const response = await fileService.addFile(filePayload);
         if (response.status===200) {
          setMessage(response.data);
          setTitle("Success");
          setOpenModal(true);
          resetFileData();
         }

      } catch (error) {
        if ( error.response.status === 409) {
          setMessage(error.response.data);
          setTitle("Duplicate");
          setOpenModal(true);
          console.log("response with status 409 (Conflict)"+error.response.data);

        }
      // else if(error.response){
      //   setMessage(error.response.data);
      //     setTitle("Duplicate");
      //     setOpenModal(true);
      //     console.log(error.response.data);
      // }
        
      }
    }
    fetchRecentFilesData();
    
}

const updateFile=async () => {
  if (!file.fileId) {
    setMessage("File Id is Required");
    setTitle("Empty");
    setOpenModal(true);
  }else{
    
  try {
     
    const response = await fileService.updateFile(id,file.fileId,filePayload)
    if(response.status===200){
      setMessage(response.data);
      setTitle("Success");
      setOpenModal(true);
      setIsUpdatable(false);
      resetFileData();

    }
    // Continue with any other logic after a successful response

} catch (error) {
    console.error('Error Updating:', error);
    if(error.response.status===404){
      console.log("not found");
      setMessage(error.response.data);
      setTitle("Not Found");
      setOpenModal(true);
    }else if(error.response.status===409){
      console.log("duplication");
      setMessage(error.response.data);
      setTitle("Duplicate");
      setOpenModal(true);
    }else if(error.response.status===500){
      setMessage(error.response.data);
      setTitle("Error");
      setOpenModal(true);
    }

    // Handle the error as needed, e.g., show an error message to the user
}
fetchRecentFilesData();

  }
}
const deleteButton=async ()=>{
  if (file.fileId=== "") {
    setMessage("File Id is Required");
    setTitle("Empty");
    setOpenModal(true);
  }else{
    try {
      const response=await fileService.removeFile(id,file.fileId)
        if(response.status===200){
            setMessage(response.data);
            setTitle("Success");
            setOpenModal(true);
        }
      
        //console.log(response.data);
      
    } catch (error) {
      if(error.response.status===404){
        setMessage(error.response.data);
        setTitle("Not Found");
        setOpenModal(true);
        console.log('Error Deleting file:'+error.response.data);
      }
      //console.error('Error Deleting file:', error);
    }
    fetchRecentFilesData();
  }

 }


  
  function resetFileData(){
        changeFile(prevFile=>{
            return({
            fileId:"",
            fileNumber:"",
            fileName:"",
            section:{id},
            subject:"",
            year:"",
            rackNumber:"",
            boxNumber:"",
            fileIndex:""

            }
                
            )
        })
    }
    

    const rackJSX= racks.map(rack=>(
      <option key={rack.id} value={rack.id}>{rack.rackNumber}</option>
    ))
    const subjectsJSX=subjects.map(subject=>(
      <option key={subject.id} value={subject.id}>{subject.subjectName}</option>
    ))
    

    return(
        <div className="flex flex-col  gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
          Add New File
        </h3>

        <fieldset className="border rounded-lg flex items-center justify-center lg:flex-row  flex-col p-5 md:gap-10 grid md:grid-cols-4 lg:grid-cols-6 gap-5 m-5">
          <FloatingLabel className="row-span-full md:row-span-full"
            variant="filled"
            name="fileId"
            label="FILE ID"
            
            value={file.fileId}
            // onChange={(event) => setSearchId(event.target.value)}
            onChange={handleChange}

            
          />

          <Button
            className="uppercase w-52"
            color="blue"
            onClick={searchFile}
          >
            {" "}
            <FaSearch className="mr-2 h-5 w-5" />
            Search File                          
                                                               {/* Search File */}
          </Button>

          <Button className="uppercase w-52" 
            onClick={addFile}
          >
            {" "}
            <HiOutlineSave className="mr-2 h-5 w-5" />
            Add File                                    {/* adddbutton-------------------- */}
            
          </Button>
          <Button
            className="uppercase w-52"
            color="purple"
            onClick={updateFile}
            disabled={!isUpdatable}
          >
            {" "}
            <FaSyncAlt className="mr-2 h-5 w-5" />
            Update File                                       {/*Updatebutton-------------------- */}
          </Button>
          <Button
            className="uppercase w-52"
            color="failure"
            onClick={deleteButton}
          >
            {" "}
            <MdDelete className="mr-2 h-5 w-5" />
             Delete File       {/*Deletebutton-------------------- */}
          </Button>
          <Button
            className="uppercase w-52 bg-slate-600"
            onClick={resetFileData}
          >
            {" "}
            <FaEraser className="mr-2 h-5 w-5" /> Clear File        {/*Clearbutton-------------------- */}
          </Button>
        </fieldset>


        {/* file details are start from here */}
        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-end p-5 gap-5 m-5">
            <legend className="text-slate-600 uppercase">{section1.sectionName}</legend>
                                                          {/* Section Name ..................................*/}
            <FloatingLabel
              variant="filled"
              label="FILE NUMBER"
              name="fileNumber"
              value={file.fileNumber}
              onChange={handleChange}
            />
            <FloatingLabel
              variant="filled"
              label="FILE NAME"
              name="fileName"
              value={file.fileName}
              onChange={handleChange}
            />
             <div className="mb-2">
              <Label
                htmlFor="designation"
                className="m-1 mb-2 text-slate-500 text-center text-base uppercase"
              >
                Subject
              </Label>
              <Select
                id="subject"
                name="subject"
                value={file.subject}
                onChange={handleChange}
              >
                <option value="">-----SELECT A SUBJECT-----</option>
                {/* <option value="සභාපති">සභාපති</option>
                <option value="ලේකම්">ලේකම්</option>
                <option value="කළමණාකරණ සේවා නිලධාරී">
                  කළමණාකරණ සේවා නිලධාරී
                </option> */}
                {subjectsJSX}
              </Select>
            </div>
            <FloatingLabel
              variant="filled"
              label="YEAR"
              name="year"
              value={file.year}
              onChange={handleChange}
            />
            <div></div>
            <div></div>
            <fieldset className="border rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-end p-5 gap-5 m-5 col-span-full">
            <legend className="text-slate-600 uppercase">location</legend>
            <div className="mb-2 ">
              <Label
                htmlFor="designation"
                className="m-1 mb-2 text-slate-500 text-center text-base uppercase"
              >
                Rack Number
              </Label>
              <Select
                id="rackNumber"
                name="rackNumber"
                value={file.rackNumber}
                onChange={handleChange}
              >
                <option value="">-----SELECT A RACK NUMBER-----</option>

                {/* <option value="සභාපති">සභාපති</option>
                <option value="ලේකම්">ලේකම්</option>
                <option value="කළමණාකරණ සේවා නිලධාරී">
                  කළමණාකරණ සේවා නිලධාරී
                </option> */}
                {rackJSX}
              </Select>
            </div>
            <FloatingLabel
              variant="filled"
              label="BOX NUMBER"
              name="boxNumber"
              value={file.boxNumber}
              onChange={handleChange}
            />
             <FloatingLabel
              variant="filled"
              label="FILE INDEX"
              name="fileIndex"
              value={file.fileIndex}
              onChange={handleChange}
            />
           </fieldset>
          </fieldset>
        </div>
        {/* Table starts here */}
        <div className="overflow-auto">
      <Table striped hoverable className="text-center">
        <Table.Head>
          <Table.HeadCell>File ID</Table.HeadCell>
          <Table.HeadCell>File Number</Table.HeadCell>
          <Table.HeadCell>File Name</Table.HeadCell>
          <Table.HeadCell>Subject</Table.HeadCell>
          <Table.HeadCell>Year</Table.HeadCell>
          <Table.HeadCell>Rack Number</Table.HeadCell>
          <Table.HeadCell>Box Number</Table.HeadCell>
          <Table.HeadCell>File Index</Table.HeadCell>
          
        </Table.Head>


        <Table.Body className="divide-y">

        {recentFiles.map((file) => (
        <Table.Row key={file.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
         
          <Table.Cell>{file.id}</Table.Cell>
          <Table.Cell>{file.fileNumber}</Table.Cell>
          <Table.Cell>{file.fileName}</Table.Cell>
          <Table.Cell>{file.archiveSubject.subjectName}</Table.Cell>
          <Table.Cell>{file.year}</Table.Cell>
          <Table.Cell>{file.rack.rackNumber}</Table.Cell>
          <Table.Cell>{file.boxNumber}</Table.Cell>
          <Table.Cell>{file.fileIndex}</Table.Cell>
        
        </Table.Row>
      ))}

        </Table.Body>
      </Table>
    </div>

        {/* Table ends here */}
        {/* Personlan details ends here */}
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        
        <Modal.Header>
          {title === "Processing" && (
            <Spinner size="xl" />
          )}
          {title === "Error" && (
            <MdError className="inline-block text-red-500 text-4xl mr-5" />
          )}
          {title === "Empty" && (
            <MdRadioButtonUnchecked className="inline-block text-red-500 text-4xl mr-5" />
          )}
          {title === "Duplicate" && (
            <HiDocumentDuplicate className="inline-block text-yellow-400 text-4xl mr-5" />
          )}
          {title === "Warning" && (
            <IoIosWarning className="inline-block text-amber-500 text-4xl mr-5" />
          )}
          {title === "Not Found" && (
            <FaSearchMinus className="inline-block text-yellow-500 text-4xl mr-5" />
          )}
          {title === "Success" && (
            <MdDoneOutline className="inline-block text-lime-600 text-4xl mr-5" />
          )}
          {title}
        </Modal.Header>
        <Modal.Body>
          <div className="normal-case text-center">{message}</div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button onClick={() => setOpenModal(false)}>Close</Button>
          <Button
            // onClick={() => {
            //   EmployeeService.removeEmployee(serachId)
            //     .then((response) => {
            //       resetEmployeeData();
            //       setShow(false);
            //       setMessage(serachId + " පද්ධතියෙන් සාර්ථකව ඉවත් කරන ලදී ");
            //       setTitle("Success");
            //       setOpenModal(true);
            //     })
            //     .catch((e) => {
            //       console.log(e);
            //     });
            //   setOpenModal(false);
            // }}
            style={{ display: show ? "block" : "none" }}
            color="failure"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
  }

  export default FileCrud;