import React from "react";
import CollapseBar from "../../Components/UI/CollapseBar";
import Tab from "../../Components/UI/Tab";


function HREmployeeProfile() {
  const employee = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];
  return (
    <main className="flex justify-between">
      <CollapseBar />
      <div className="flex-grow m-5">
        <div className="flex items-center  flex-grow">
          <div>
            <img
              src={employee[0].imageUrl}
              alt="profile pic"
              className="rounded-full w-40 mb-5"
            />
          </div>
          <div>Employee Data</div>
        </div>

        <div>
          <Tab />
        </div>
      </div>
    </main>
  );
}

export default HREmployeeProfile;
