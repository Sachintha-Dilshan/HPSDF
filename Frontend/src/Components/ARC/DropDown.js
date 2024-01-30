import React from 'react'

function DropDown() {
  return (
    <div className="mt-3"> 
        <select class="shadow-inner-md rounded-lg w-80 h-10 flex items-center">
            <option class="bg-transparent focus:outline-none text-blue-800 text-lg font-outfit font-semibold uppercase"></option>
            <option class="bg-transparent focus:outline-none text-blue-800 text-lg font-outfit font-semibold uppercase">ADMINISTRATION SECTION</option>
            <option class="bg-transparent focus:outline-none text-blue-800 text-lg font-outfit font-semibold uppercase">ACCOUNTS SECTION</option>
            <option class="bg-transparent focus:outline-none text-blue-800 text-lg font-outfit font-semibold uppercase">REVENUE SECTION</option>
            <option class="bg-transparent focus:outline-none text-blue-800 text-lg font-outfit font-semibold uppercase">DEVELOPMENT SECTION</option>
            <option class="bg-transparent focus:outline-none text-blue-800 text-lg font-outfit font-semibold uppercase">ENVIRONMENTAL/COMMUNITY DEVELOPMENT SECTION</option>
        </select>
    </div>

  )
}

export default DropDown