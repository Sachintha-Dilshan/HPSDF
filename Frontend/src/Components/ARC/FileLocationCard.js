import React from 'react'

function FileLocationCard(props) {
  return (
    <div>
        <h5 className="text-2xl font-bold tracking-tight  text-slate-500 uppercase text-center">
          {props.title}
        </h5>
        {/*<div className="lg:ml-28 lg:mt-2 sm:ml-auto md:ml-auto">
        <BlueLine/>
  </div>*/}
    <div className="display flex shadow-lg items-center rounded-lg transform hover:scale-105 transition ease-out duration-500 cursor-pointer mt-10">
      <img src={props.image} alt="Employees" className="w-52 h-52 ml-4 mb-4 rounded-l-lg" />
      <div className="flex-grow">
        <h3 className=" text-red-700 dark:text-gray-400 text-6xl font-bold text-center">
          0{props.count}
        </h3>
      </div>
    </div>
    </div>
  )
}

export default FileLocationCard