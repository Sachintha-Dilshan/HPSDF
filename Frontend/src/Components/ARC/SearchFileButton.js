import React from 'react'

function SearchFileButton() {
  return (
    <button class="bg-[#87CFD0] hover:bg-gray-400 text-black font-bold py-3 px-6 rounded-full inline-flex whitespace-nowrap items-center border border-black">
    <span>SEARCH FILE</span>
    <img src="/Images/searchfilelogo.png" alt ="Search File button logo" class="fill-current w-6 h-6 ml-4"/>
    
  </button>
  )
}

export default SearchFileButton