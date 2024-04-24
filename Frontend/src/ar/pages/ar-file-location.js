import { Button, FloatingLabel, Label, Select } from "flowbite-react";
import React, { useEffect, useState } from 'react';
import { Navigate, json, useLocation, useNavigate } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { ImDrawer } from "react-icons/im";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import ARFileCollapseBar from '../components/ar-file-collapse-bar';
import ARFileLocationCard from "../components/ar-file-location-card";
import fileService from "../services/add-file-service";
import {
  Radio,
  TextInput,
  Modal,
  FileInput,
  Avatar,
  Spinner,
  Table,
} from "flowbite-react";
import {
  MdDelete,
  MdDoneOutline,
  MdRadioButtonUnchecked,
  MdError,
} from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { HiMail, HiOutlineSave,HiDocumentDuplicate } from "react-icons/hi";
import {
  FaPhone,
  FaCalendar,
  FaSearch,
  FaSyncAlt,
  FaEraser,
  FaSearchMinus
} from "react-icons/fa";

function ARFileLocation() {
   const location=useLocation();
  const navigate=useNavigate();
   const searchedFile=location.state;
   

   const [employeeId,setEmployeeId]=useState("");
   const [message, setMessage] = React.useState("");
   const [openModal, setOpenModal] = React.useState(false);
   const [title, setTitle] = React.useState("");
   const [show, setShow] = React.useState(false);
   

   const handleChange=(event)=>{
    setEmployeeId(event.target.value);
   }
  
   React.useEffect(()=>{
    console.log(searchedFile.fileNumber);
    console.log(searchedFile.id);
   },[]
   )

   const handleBtnCheckout=()=>{
    fileService.checkOutFile(searchedFile.id,employeeId)
    .then((response)=>{
      console.log(response.data);
      setMessage(response.data);
      setTitle("Success");
      setOpenModal(true);
      navigate("/AR/checkedOutFilesEmployee", { state: {"employeeId":employeeId}});
    })
    .catch((error)=>{
      if (error.response && error.response.status === 404) {
        setMessage(error.response.data);
        setTitle("Not Found");
        setOpenModal(true);
        console.log(error.response);
      console.log(error.response.data);
    }})
   }

   

    const cardData = [
        {
            id: 1,
            title: "RACK NUMBER",
            count: searchedFile.rackNumber,
            Icon: <GiBookshelf  className="w-40 h-40"/>
          },
        {
          id: 2,
          title: "BOX NUMBER",
          count: searchedFile.boxNumber,
          Icon: <ImDrawer  className="w-40 h-40"/>
        },
        {
          id: 3,
          title: "FILE INDEX",
          count: searchedFile.fileIndex,
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
            <FloatingLabel variant="filled" label="File Number" value={searchedFile.fileNumber} readOnly/>
            <FloatingLabel variant="filled" label="File Name" value={searchedFile.fileName} readOnly/>
            <FloatingLabel variant="filled" label="Year" value={searchedFile.year} readOnly/>
            <FloatingLabel variant="filled" label="Section" value={searchedFile.sectionName} readOnly/>
            <FloatingLabel variant="filled" label="Subject" value={searchedFile.subjectName} readOnly/>
 
    
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
            <div>
              <Button
                className="uppercase w-52"
                color="green"
                onClick={handleBtnCheckout}
                disabled={searchedFile.checkedOut}
              >
                <MdOutlineShoppingCartCheckout  className="mr-2 h-5 w-5" />
                Check Out
                
              </Button>
              <small className="text-orange-900 content-center ml-6">{searchedFile.checkedOut?"already checked Out": ""}</small>
              </div>
              <FloatingLabel variant="filled" label="" name="employeeId" value={employeeId} onChange={handleChange}/>
              
              </fieldset>
        </div>
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
            style={{ display: show ? "block" : "none" }}
            color="failure"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
       
        </main>
  )
}

export default ARFileLocation