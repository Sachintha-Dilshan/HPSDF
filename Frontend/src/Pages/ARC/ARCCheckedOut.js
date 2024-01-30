import React from 'react';
import BackButton from '../../Components/ARC/BackButton';
import CheckInTable from '../../Components/ARC/CheckInTable';
import ClearButton from '../../Components/ARC/ClearButton';
import SearchArea from '../../Components/ARC/SearchArea';
import SearchFileButton from '../../Components/ARC/SearchFileButton';
import CollapseBar from '../../Components/UI/CollapseBar';

function ARCCheckedOut() {
    return (
      
          <main className="flex justify-between relative overflow-x-hidden">
        <CollapseBar />
        <div className="w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-8 ml-8">
  
          {/*first Row */}
          <div className="col-span-2 md:col-span-1 sm:col-span-2"><BackButton/></div>
          <div className="lg:-ml-28 lg:mt-2 col-span-2 md:col-span-1 sm:col-span-2">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap font-Outfit text-[#008080] text-2xl font-bold  leading-7.5"> 
              CHECKED OUT FILES
            </span>
          </div>
          
          
          {/*Second Row */}
          <div className="lg:col-span-2 md:col-span-1 sm:col-span-2 h-4 border-b-2 border-teal-500">
              </div>    
           
  
           {/*third Row */}
           <div className="col-span-2 lg:ml-20 mb-4 sm:ml-0"><SearchArea/></div>    
           
  
           {/*fourth Row */}
           <div className="lg:ml-36 lg:mt-8 col-span-2 md:col-span-1 sm:col-span-2"><SearchFileButton/></div>
          <div className="lg:ml-24 lg:mt-8 col-span-2 md:col-span-1 sm:col-span-2"><ClearButton/></div>
          
  
           {/*fifthth Row */}
           <div className="col-span-2 lg:mt-10 sm:mt-4"><CheckInTable/></div>
          
  
      </div>
      </main>
    )
  }
  
  export default ARCCheckedOut