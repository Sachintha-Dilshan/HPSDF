import React from 'react';
import ARhomecard from '../component/ar-home-card';
import CollapseBar from '../../layouts/collapse-bar';
import { IoIosPeople  } from "react-icons/io";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { FaHandsHolding } from "react-icons/fa6";
import { BsFillCartCheckFill } from "react-icons/bs";




function ARHome() {
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
        <div className="grid  lg:grid-cols-3 md:grid-cols-1 gap-10  mt-8 ">
          {cardData.map((data) => (
            <ARhomecard
              key={data.id}
              title={data.title}
              count={data.count}
              icon={data.icon}
              title2={data.title2}
              colr1={data.colr}
              url={data.url}
            />
          ))}
        </div>
      </div>

    </main>
  )
}

export default ARHome
