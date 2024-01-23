import React from "react";

function CollapseBar() {
  const [show, setShow] = React.useState(false);

  return (
    <div
      className=" rounded-tr-3xl rounded-br-3xl flex flex-col px-3 py-10 my-2  w-16  bg-gray-700 transition-all duration-300 ease-in-out hover:w-60 cursor-pointer"
      onMouseEnter={() => setShow((prevShow) => !prevShow)}
      onMouseLeave={() => setShow((prevShow) => !prevShow)}
    >
      <div>
        <i className="fas fa-angle-double-right text-white mr-2 text-2xl"></i>
      </div>
      <div className="flex">
        <div style={{ display: show ? "block" : "none" }}>
          <ul className="text-white uppercase">
            <li>Employee Details</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CollapseBar;
