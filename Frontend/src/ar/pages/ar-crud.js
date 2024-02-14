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
  } from "flowbite-react";
  import { HiMail, HiOutlineSave } from "react-icons/hi";
  import {
    FaPhone,
    FaCalendar,
    FaSearch,
    FaSyncAlt,
    FaEraser,
  } from "react-icons/fa";
  
  import {
    MdDelete,
    MdDoneOutline,
    MdRadioButtonUnchecked,
    MdError,
  } from "react-icons/md";
  import { IoIosWarning } from "react-icons/io";


  const FileCrud=()=>{
    const [file,changeFile]=useState({
        fileId:"",
        fileNumber:"",
        fileName:"",
        section:"",
        subject:"",
        year:"",
        rackNumber:"",
        boxNumber:"",
        fileIndex:""

    })

     function handleChange(event){
        changeFile({
            ...file,
            [event.target.name]:event.target.value
        })
    }
    function resetEmployeeData(){
        changeFile(prevFile=>{
            return({
            fileId:"",
            fileNumber:"",
            fileName:"",
            section:"",
            subject:"",
            year:"",
            rackNumber:"",
            boxNumber:"",
            fileIndex:""

            }
                
            )
        })
    }
    const varrrrr= "ADMINISTRATION SECTION";

    return(
        <div className="flex flex-col  gap-2 m-5">
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
          Add New File
        </h3>

        <fieldset className="border rounded-lg flex items-center justify-center lg:flex-row  flex-col p-5 md:gap-10 grid md:grid-cols-4 lg:grid-cols-6 gap-5 m-5">
          <FloatingLabel className="row-span-full md:row-span-full"
            variant="filled"
            name="fileNumber"
            label="FILE ID"
            
            value={file.fileId}
            // onChange={(event) => setSearchId(event.target.value)}
            onChange={handleChange}

            
          />

          <Button
            className="uppercase w-52"
            color="blue"
            // onClick={searchEmployee}
          >
            {" "}
            <FaSearch className="mr-2 h-5 w-5" />
            Search File
          </Button>

          <Button className="uppercase w-52" 
        //   onClick={addEmployee}
          >
            {" "}
            <HiOutlineSave className="mr-2 h-5 w-5" />
            Add File
          </Button>
          <Button
            className="uppercase w-52"
            color="purple"
            // onClick={updateEmployee}
          >
            {" "}
            <FaSyncAlt className="mr-2 h-5 w-5" />
            Update File
          </Button>
          <Button
            className="uppercase w-52"
            color="failure"
            // onClick={deleteEmployee}
          >
            {" "}
            <MdDelete className="mr-2 h-5 w-5" /> Delete File
          </Button>
          <Button
            className="uppercase w-52 bg-slate-600"
             onClick={resetEmployeeData}
          >
            {" "}
            <FaEraser className="mr-2 h-5 w-5" /> Clear File
          </Button>
        </fieldset>


        {/* file details are start from here */}
        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-end p-5 gap-5 m-5">
            <legend className="text-slate-600">{varrrrr}</legend>
        
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
                className="m-1 mb-2 text-slate-500 text-center text-base"
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
                <option value="සභාපති">සභාපති</option>
                <option value="ලේකම්">ලේකම්</option>
                <option value="කළමණාකරණ සේවා නිලධාරී">
                  කළමණාකරණ සේවා නිලධාරී
                </option>
              </Select>
            </div>
            <FloatingLabel
              variant="filled"
              label="YEAR"
              name="year"
              value={file.year}
              onChange={handleChange}
            />


            <div className="mb-2">
              <Label
                htmlFor="designation"
                className="m-1 mb-2 text-slate-500 text-center text-base"
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
                <option value="සභාපති">සභාපති</option>
                <option value="ලේකම්">ලේකම්</option>
                <option value="කළමණාකරණ සේවා නිලධාරී">
                  කළමණාකරණ සේවා නිලධාරී
                </option>
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
        </div>
        {/* Personlan details ends here */}
        </div>
    );
  }

  export default FileCrud;