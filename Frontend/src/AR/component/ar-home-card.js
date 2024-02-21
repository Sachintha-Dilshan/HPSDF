import React from 'react'

function ARhomecard(props) {
    return (
        <div className="display flex shadow-lg items-center rounded-lg transform hover:scale-105 transition ease-out duration-500 cursor-pointer border-2 ml-5 mr-5" style={{ overflow: 'hidden' }}>
            <div>
                <div className={`w-10 h-80 top-0 left-0 absolute ${props.colr1}`} >
                </div>
            </div>
            <div className="flex-grow mt-12 mb-12">
                <h5 className="text-lg font-bold tracking-tight text-slate-500 uppercase text-center mx-12 mt-8 ">
                    {props.title}
                </h5>
                <h3 className="font-normal text-red-700 dark:text-gray-400 text-3xl text-center m-4">
                    {props.count}
                </h3>
                <h2 className="text-lg font-bold tracking-tight  text-slate-500 uppercase text-center m-4">
                    {props.title2}
                </h2>
            </div>
            <div className="flex-l w-100 h-100">
                 {props.icon}
            </div>
        </div>
    )
}

export default ARhomecard
