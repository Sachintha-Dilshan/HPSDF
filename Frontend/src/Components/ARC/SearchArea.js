import { TextInput } from 'flowbite-react'
import React from 'react'

import BlueLine from './BlueLine'
import DropDown from './DropDown'

function SearchArea() {
  return (
    <div className="mt-8 grid lg:grid-cols-2 sm:grid-cols-1  gap-y-10"> 
        <div>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap font-Outfit text-[#174082] text-xl font-bold  leading-7.5">FILE NUMBER</span>
            <BlueLine className="mt-1"/>
            <TextInput className="w-80 mt-3"/>
       </div>

        <div>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap font-Outfit text-[#174082] text-xl font-bold  leading-7.5">SUBJECT</span>
            <BlueLine className="mt-1"/>
            <DropDown/>
        </div>

        <div>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap font-Outfit text-[#174082] text-xl font-bold  leading-7.5">FILE NAME</span>
            <BlueLine className="mt-1"/>
            <TextInput className="w-80 mt-3"/>
        </div>

        <div>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap font-Outfit text-[#174082] text-xl font-bold  leading-7.5">YEAR</span>
            <BlueLine className="mt-1"/>
            <TextInput className="w-80 mt-3"/>
        </div>
    </div>
  )
}

export default SearchArea