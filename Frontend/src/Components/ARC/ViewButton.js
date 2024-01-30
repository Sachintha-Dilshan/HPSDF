import React from 'react'

function ViewButton() {
  return (
    <button class="bg-red-300 hover:bg-gray-400 text-black font-bold py-3 px-6 rounded-full inline-flex items-center border border-black">
    <span>VIEW</span>
    <img src="/Images/viewbuttonlogo.png" alt ="View button logo" class="fill-current w-6 h-6 ml-4"/>
    
  </button>
  )
}

export default ViewButton