import React from 'react';
import { BsCartCheckFill } from "react-icons/bs";


function ARCheckedoutCard() {
  return (
    <div className="display flex shadow-lg items-center rounded-lg transform hover:scale-105 transition ease-out duration-500 cursor-pointer w-80 ">
    <BsCartCheckFill className="h-28 w-28 ml-3 mt-3 mb-3"/>
      
    <div className="flex-grow">
      <h5 className="text-lg font-bold tracking-tight  text-slate-500 uppercase text-center">
        CHECKED OUT
      </h5>
      
      <h3 className="font-normal text-red-700 dark:text-gray-400 text-3xl text-center">
        05
      </h3>

      <h5 className="text-lg font-bold tracking-tight  text-slate-500 uppercase text-center">
        TOTAL FILES
      </h5>
    </div>
</div>
  )
}

export default ARCheckedoutCard