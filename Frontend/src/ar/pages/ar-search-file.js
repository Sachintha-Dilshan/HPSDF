import { Button, FloatingLabel, Label, Select } from "flowbite-react";
import React,{useState} from 'react';
import fileService from "../services/add-file-service";
import sectionService from "../services/add-section-service";
import subjectService from "../services/add-subject-service";
import { AiOutlineClear } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import ARFileCollapseBar from '../components/ar-file-collapse-bar';
import ARSearchFileTable from "../components/ar-search-file-table";

function ARSearchFile() {
  const [sections,setSections]=useState([]);
  const [subjects,setSubjects]=useState([]);
  const [searchedFiles,setSearchedFiles]=useState([]);
  const [file,changeFile]=useState({
    fileNumber:"",
    fileName:"",
    year:"",
    section:"",
    subject:""
    
})
function handleChange(event){
  changeFile({
      ...file,
      [event.target.name]:event.target.value
  })    
}
const searchData=async()=>{
  try{
    
    const response=await fileService.getSearchFiles(file);
    setSearchedFiles(response.data);
    console.log(searchedFiles);

  }catch(error){
    console.log('Search Files retrieval is failed:'+error.response.data);
  }
 
}
const clearData=()=>{
  changeFile({
    fileNumber:"",
    fileName:"",
    year:"",
    section:"",
    subject:""
    
  })
}
  const fetchData=()=>{
    sectionService.getAllSections()
    .then((response)=>{
        setSections(response.data);
        console.log("section retrival to the search file is successful..");
        console.log(response.data);
    })
    .catch((e)=>{
        console.log("section retrival to the search file is failed...");
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
  React.useEffect(()=>{searchData()},[]);
  React.useEffect(()=>{fetchSubjectsData()},[file.section]);

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
         SEARCH FILE
        </h3>
        </div>
        
        <fieldset className="border rounded-lg grid lg:grid-cols-7 p-5 gap-5 m-5">
            <legend className="text-slate-600">Checkout Files</legend>
            <FloatingLabel variant="filled" label="File Number" name="fileNumber" value={file.fileNumber} onChange={handleChange} />
            <FloatingLabel variant="filled" label="File Name" name="fileName" value={file.fileName} onChange={handleChange}/>
            <FloatingLabel variant="filled" label="Year" name="year" value={file.year} onChange={handleChange}/>

{/*select section */}
            <div className="flex justify-center mt-3">
            <Label
                htmlFor="segment"
                value="Section"
                className="m-1 mb-2 text-slate-500 text-center text-base -mr-12 -mt-7"
                style={{ fontFamily: 'Arial, sans-serif',fontSize: '14px' }}
              />
              <Select id="segment" name="section" value={file.section} onChange={handleChange} required>
                <option>-----Select-----</option>
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
                <option>-----Select-----</option>
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
                onClick={clearData}
              >
                <AiOutlineClear className="mr-2 h-5 w-5" />
                Clear File
              </Button>

            
            </fieldset>

      <div className="flex flex-col  lg:ml-20  mt-12">
        <ARSearchFileTable file={searchedFiles}/>
    </div>
        </main>
  )
}

export default ARSearchFile