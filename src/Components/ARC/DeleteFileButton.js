import React from 'react'

function DeleteFileButton() {
  return (
    <button class="bg-[#FD5C63] hover:bg-gray-400 text-black font-bold py-3 px-6 rounded-full inline-flex whitespace-nowrap items-center border border-black">
    <span>DELETE FILE</span>
    <img src="Images/deletefilebuttonlogo.png" alt ="Delete File button logo" class="fill-current w-6 h-6 ml-4"/>
    
  </button>
  )
}

export default DeleteFileButton