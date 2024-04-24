import { Button, FloatingLabel, Label, Select} from "flowbite-react";

import React, { useEffect }  from 'react';
import { AiOutlineClear } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import ARCheckedOutFileTable from "../components/ar-checked-out-file-table";
import ARFileCollapseBar from '../components/ar-file-collapse-bar';
import { useState ,useRef } from "react";
import sectionService from "../services/add-section-service";
import subjectService from "../services/add-subject-service";
import fileService from "../services/add-file-service";

function ARCheckedOutFiles() {
  const isMounted = useRef(true);
  const [rerenderCondition,setCondition]=useState(false);
  const [sections,setSections]=useState([]);
  const [subjects,setSubjects]=useState([]);
  const [checkedOutFiles,setCheckedOutFiles]=useState([]);
  const [file,changeFile]=useState({
    fileNumber:"",
    fileName:"",
    section:"",
    subject:"",
    employeeId:""
})


//console.log(file);
function handleChange(event){
  changeFile({
      ...file,
      [event.target.name]:event.target.value
  })    
}
const searchData=async()=>{
  try{
    const response=await fileService.getCheckedoutFiles(file);
    setCheckedOutFiles(response.data);
    console.log(checkedOutFiles);

  }catch(error){
    console.log('Error fetching checkout files:'+error.response.data);
  }
 
}

const fetchData=()=>{
  sectionService.getAllSections()
  .then((response)=>{
      setSections(response.data);
      console.log("check axios..........");
      console.log(response.data);
  })
  .catch((e)=>{
      console.log("hhhhhhhhhhhh");
      console.log(e);
  })
}
const fetchSubjectsData=()=>{
  const section=sections.find((sec)=>sec.sectionName===file.section);
  const sectionId=section? section.id: null;
  if(sectionId!==null){
    subjectService.getSubjectsBySectionId(sectionId)
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
}

React.useEffect(()=>{fetchData()},[]);
React.useEffect(()=>{fetchSubjectsData()},[file.section]);
//React.useEffect(()=>{searchData()},[]);


const JSXSections=sections.map((section)=>(
  <option key={section.id} value={section.sectionName}>{section.sectionName}</option>
)) 
const JSXSubjects=subjects.map((subject)=>(
  <option key={subject.id} value={subject.subjectName}>{subject.subjectName}</option>
)) 

  return (
    <main>
    <ARFileCollapseBar />
    <div className="flex flex-col gap-2 m-5">
      <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
       CHECKED OUT FILES
      </h3>
      </div>

      <fieldset className="border rounded-lg grid lg:grid-cols-7 p-5 gap-5 m-5">
            <legend className="text-slate-600">Checkout Files</legend>
            <FloatingLabel variant="filled" name="fileNumber" label="File Number" value={file.fileNumber} onChange={handleChange}/>
            <FloatingLabel variant="filled" name="fileName" label="File Name" value={file.fileName} onChange={handleChange} />
            <FloatingLabel variant="filled" name="employeeId" label="Employee ID" value={file.employeeId} onChange={handleChange}/>

{/*select section */}
            <div className="flex justify-center mt-3">
            <Label
                htmlFor="segment"
                value="Section"
                className="m-1 mb-2 text-slate-500 text-center text-base -mr-12 -mt-7"
                style={{ fontFamily: 'Arial, sans-serif',fontSize: '14px' }}
              />
              <Select id="segment" name="section" value={file.section} onChange={handleChange}required>
                <option value="">-----Select-----</option>
                {JSXSections}
                {/* <option>ADMINISTRATION SECTION</option>
                <option>ACCOUNTS SECTION</option>
                <option>REVENUE SECTION</option>
                <option>DEVELOPMENT SECTION</option>
                <option>ENVIRONMENTAL/COMMUNITY DEVELOPMENT SECTION</option> */}
                
              </Select>
              </div>

{/*Select Subject */}
              <div className="flex mt-3">
            <Label
                htmlFor="segment"
                value="Subject"
                className="m-1 mb-2 text-slate-500 text-center text-base -mr-12 -mt-7"
                style={{ fontFamily: 'Arial, sans-serif',fontSize: '14px' }}
              />
              <Select id="segment" name="subject" value={file.subject} onChange={handleChange} required disabled={!file.section}>
                <option value="">-----Select-----</option>
                {JSXSubjects}
                
              </Select>
  </div>
              {/*Search files button*/}
              <Button
                className="uppercase w-44 h-10 lg:mt-3"
                color="blue"
                onClick={searchData}
              >
                <BiSearch className="mr-2 h-5 w-5" />
                Search File
              </Button>

               {/*Clear files button*/}
             <Button
                className="uppercase w-44 h-10 lg:mt-3"
                color="red"
                //onClick={updateData}
              >
                <AiOutlineClear className="mr-2 h-5 w-5" />
                Clear File
              </Button>

            
            </fieldset>
            
            <div className="flex flex-col  lg:ml-20  mt-12">
              <ARCheckedOutFileTable files={checkedOutFiles} searchFile={searchData}/>
              {/* updateCondition={setCondition} */}
            </div>
     

      </main>
  )
}

export default ARCheckedOutFiles