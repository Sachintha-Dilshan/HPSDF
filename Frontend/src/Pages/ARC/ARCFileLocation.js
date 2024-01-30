import { TextInput } from 'flowbite-react';
import React from 'react';
import BackButton from '../../Components/ARC/BackButton';
import CheckOutButton from '../../Components/ARC/CheckOutButton';
import FileLocationCard from '../../Components/ARC/FileLocationCard';
import SearchArea from '../../Components/ARC/SearchArea';
import CollapseBar from '../../Components/UI/CollapseBar';

function ARCFileLocation() {

    const cardData = [
        {
          id: 1,
          title: "RACK NUMBER",
          count: 5,
          image: "/Images/racknumbercardimg.png",
        },
        {
          id: 2,
          title: "BOX NUMBER",
          count: 2,
          image: "/Images/boxnumbercardimg.png",
        },
        {
          id: 3,
          title: "FILE INDEX",
          count: 4,
          image: "/Images/fileindexcardimg.png",
        },
        
      ];

      

  return (
    <main className="flex justify-between relative overflow-x-hidden">
    <CollapseBar />
    <div className="w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-8 ml-8">
  
          {/*first Row */}
          <div className="col-span-2 md:col-span-1 sm:col-span-2"><BackButton/></div>
          <div className="lg:-ml-28 lg:mt-2 col-span-2 md:col-span-1 sm:col-span-2">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap font-Outfit text-[#008080] text-2xl font-bold  leading-7.5"> 
              FILE LOCATION
            </span>
          </div>
          
          
          {/*Second Row */}
          <div className="lg:col-span-2 md:col-span-1 sm:col-span-2 h-4 border-b-2 border-teal-500">
              </div>    
              
       

        {/*third Row */}
        <div className="col-span-2 lg:ml-20 mb-4 sm:ml-0"><SearchArea/></div>    

        {/* cards starts here */}
        <div className="grid col-span-2 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 my-5 mx-5 mt-10 sm:ml-4">
          {cardData.map((data) => (
            <FileLocationCard
              key={data.id}
              title={data.title}
              count={data.count}
              image={data.image}
            />
          ))}
        </div>

         {/*fifth Row */}
         <div className="lg:ml-80 lg:mt-8 mb-4 col-span-2 md:col-span-1 sm:col-span-2"><CheckOutButton/></div>
          <div className="lg:-ml-28 lg:mt-8 mb-4 col-span-2 md:col-span-1 sm:col-span-2"><TextInput className="w-80 h-8  sm:mt-2"/></div>
        </div>

       </main>
  )
}

export default ARCFileLocation