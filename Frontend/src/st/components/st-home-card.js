import React from 'react'
import { IoIosPeople  } from "react-icons/io";
import { TbHourglassEmpty } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { FaHandsHolding } from "react-icons/fa6";
import { BsFillCartCheckFill } from "react-icons/bs";

function ARhomecard(props) {
    const iconComponents = {
        IoIosPeople: IoIosPeople,
        LiaFileInvoiceDollarSolid: LiaFileInvoiceDollarSolid,
        BsGraphUpArrow: BsGraphUpArrow,
        GrUserSettings: GrUserSettings,
        FaHandsHolding: FaHandsHolding,
        // Add more icons as needed
      };
       
    return (
        //<Link to={props.url}>
            <div className="display flex shadow-lg items-center rounded-xl transform hover:scale-105 transition ease-out duration-200 cursor-pointer border-2 ml-5 mr-5 h-20" style={{ overflow: 'hidden' }}>
                <div>
                    <div className={`w-10 h-80 top-0 left-0 absolute bg-red-300`} >
                    </div>
                </div>
                <div className="flex-l w-50 h-50">
                    {/* {props.icon} */}
                    {/* <{props.icon} style={{ fontSize:'100px', margin:'10px' }} /> */}
                    {/* {SelectedIcon && <SelectedIcon  />} */}
                    <TbHourglassEmpty style={{ fontSize: '30px', marginLeft: '50px',marginRight:'10px' }} />

                </div>
                <div className="flex ">
                
                    <h2 className="font-normal text-red-700 dark:text-gray-400 text-lg text-center m-auto mr-4">
                    low threashold Items
                        
                    </h2>
                    <h2 className="text-lg font-bold tracking-tight  text-slate-500 uppercase  m-auto">
                        
                     {props.count}
                    </h2>
                </div>
              
            </div>
        //</Link>
    )
}

export default ARhomecard
