import React from "react";
import { Avatar } from "flowbite-react";

 

function HREmployeeCard(props) {

  
  return (

      <div className="flex flex-col items-center justify-between p-5 m-5 rounded-2xl shadow-lg transform hover:scale-105 transition ease-out duration-500 cursor-pointer" > 
       
          <Avatar
            img={process.env.PUBLIC_URL + props.imageUrl}
            alt="Profile Image"
            size="lg"
            rounded
            // bordered
            // color="gray"
            className="mb-2"
          />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-slate-600 text-center">{props.name}</p>
          <p className="font-semibold text-slate-500 text-sm text-center my-2">
            {props.designation}
          </p>
          <div>
            <i className="fas fa-phone text-slate-500">
              <span className="px-2 text-slate-500">{props.contact}</span>
            </i>
          </div>
        </div>
      </div>
   
  );
}

export default HREmployeeCard;
