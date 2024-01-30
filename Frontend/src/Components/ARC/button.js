import React from "react";


export default function Button(props){
    return(
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5">
            {props.text}
        </button>
    )
}