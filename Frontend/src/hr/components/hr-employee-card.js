import React from "react";
import { Link } from "react-router-dom";

function HREmployeeCard(props) {
  return (
    <Link to="/HR/employeeProfile">
      <div className="flex flex-col items-center justify-between p-5 m-5 rounded-2xl shadow-lg transform hover:scale-105 transition ease-out duration-500 cursor-pointer">
        <img
          src={process.env.PUBLIC_URL + "/Images/profilePhoto.png"}
          alt="profile"
          className="h-20 w-20 rounded-full mb-2"
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
    </Link>
  );
}

export default HREmployeeCard;
