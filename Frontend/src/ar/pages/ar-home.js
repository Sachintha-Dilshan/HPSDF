import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import sectionService from '../services/add-section-service';
import ARhomecard from '../component/ar-home-card';
import CollapseBar from '../../layouts/collapse-bar';
import { IoIosPeople  } from "react-icons/io";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { FaHandsHolding } from "react-icons/fa6";
import { BsFillCartCheckFill } from "react-icons/bs";




function ARHome() {
  const [sections,setSections]=useState([]);
    
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
  React.useEffect(()=>{fetchData();},[]);
  
  const cardData = [
    {
      id: 1,
      title: "Administration Section",
      count: 150,
      icon: <IoIosPeople style={{ fontSize:'120px', margin:'10px'}} />,
      title2: "Total Files",
      colr: 'bg-[#EC4899]',
      url: ""

    },
    {
      id: 2,
      title: "Accounts Section",
      count: 12,
      icon: <LiaFileInvoiceDollarSolid style={{ fontSize:'120px', margin:'10px' }} />,
      title2: "Total Files",
      colr: 'bg-[#FFEC3E]',
      url: ""
    },
    {
      id: 3,
      title: "Revenue Section",
      count: 5,
      icon: <BsGraphUpArrow style={{ fontSize:'100px', margin:'10px' }} />,
      title2: "Total Files",
      colr: 'bg-[#F87171]',
      url: ""
    },
    {
      id: 4,
      title: "Development Section",
      count: 12,
      icon: <GrUserSettings style={{ fontSize:'100px', margin:'10px' }} />,
      title2: "Total Files",
      colr: 'bg-[#5957E9]',
      url: ""
    },
    {
      id: 5,
      title: "Community Development Section",
      count: 5,
      icon: <FaHandsHolding style={{ fontSize:'100px', margin:'10px' }} />,
      title2: "Total Files",
      colr: 'bg-[#5AB85D]',
      url: ""
    },
    {
      id: 6,
      title: "Checked Out ",
      count: 12,
      icon: <BsFillCartCheckFill style={{ fontSize:'100px', margin:'10px' }} />,
      title2: "Total Files",
      colr: 'bg-[#FFFFFF]',
      url: ""
    },
  ];
  return (
    <main class="flex justify">

      <CollapseBar />
      <div>
        <h3 className="text-center text-lg text-red-400 border-b-2 border-b-slate-200 uppercase">
          Archive
        </h3>
        {/* Dashboard cards starts here */}
        <div className="grid  lg:grid-cols-3 md:grid-cols-1 gap-8  mt-8 mx-20">
          {sections.map((section) => (
            <Link key={section.id} to={`/AR/fileCrud/${section.id}`}>         
            <ARhomecard
              key={section.id}
              title={section.sectionName}
              count={section.count}
              icon={section.sectionIcon}
              colr1={section.sectionColor}
            />
            </Link>
          ))}

            <Link  to={`/AR/archeckedOut`}>         
            <ARhomecard
             // key={section.id}
              title={"Checked Out Files"}
              count={0}
              icon={"BsFillCartCheckFil"}
              colr1={'bg-[#FFFFFF]'}
            />
            </Link>
          
          
        </div>
      </div>

    </main>
  )
}

export default ARHome
