import React from 'react'
import BackButton from '../../Components/ARC/BackButton'
import CheckInTable from '../../Components/ARC/CheckInTable'
import CollapseBar from '../../Components/UI/CollapseBar'

function ARCEmployeeArchiveAccess() {
  return (
    <main className="flex justify-between relative overflow-x-hidden">
      <CollapseBar />
      <div className="w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-8 ml-8">

        {/*first Row */}
        <div className="col-span-2 md:col-span-1 sm:col-span-2"><BackButton/></div>
        <div className="lg:-ml-40 lg:mt-2 col-span-2 md:col-span-1 sm:col-span-2">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap font-Outfit text-[#008080] text-2xl font-bold  leading-7.5"> 
            EMPLOYEE ARCHIVE ACCESS
          </span>
        </div>
        
        
        {/*Second Row */}
        <div className="lg:col-span-2 md:col-span-1 sm:col-span-2 h-4 border-b-2 border-teal-500">
            </div>

       {/*Third Row */}
       <div className="lg:ml-52 lg:mt-8 mb-4 col-span-2 md:col-span-1 sm:col-span-2">
       <img src="Images/profilelogo.png" alt ="Profile logo" class="w-[8rem] h-[8rem] rounded-[6.90625rem] border-2 border-slate-50 "/>
       </div>
          <div className="lg:-ml-80 lg:mt-24 mb-4 col-span-2 md:col-span-1 sm:col-span-2">
          <span className="text-slate-900 text-2xl font-semibold font-'Poppins' uppercase leading-7">MR HARSHA UDARA</span>
          </div>
            

        {/*Fourth Row */}
        <div className="col-span-2 lg:mt-4">
            <CheckInTable/>
        </div>
            </div>
            </main>
  )
}

export default ARCEmployeeArchiveAccess