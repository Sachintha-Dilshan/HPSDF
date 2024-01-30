import React from 'react';
import ARhomecard from '../../Components/UI/ARhomecard';
import CollapseBar from '../../Components/UI/CollapseBar';

function ARhome() {
  const cardData = [
    {
      id: 1,
      title: "Administration Section",
      count: 150,
      image: "/Images/Administration.png",
      title2: "Total Files",
      colr: 'bg-[#EC4899]',
    },
    {
      id: 2,
      title: "Accounts Section",
      count: 12,
      image: "/Images/Accounts.png",
      title2: "Total Files",
      colr: 'bg-[#FFEC3E]',
    },
    {
      id: 3,
      title: "Revenue Section",
      count: 5,
      image: "/Images/Revenue.png",
      title2: "Total Files",
      colr: 'bg-[#F87171]',
    },
    {
      id: 4,
      title: "Development Section",
      count: 12,
      image: "/Images/Development.png",
      title2: "Total Files",
      colr: 'bg-[#5957E9]',
    },
    {
      id: 5,
      title: "Environmental/Community Development Section",
      count: 5,
      image: "/Images/Environmental.png",
      title2: "Total Files",
      colr: 'bg-[#5AB85D]',
    },
    {
      id: 6,
      title: "Checked Out ",
      count: 12,
      image: "/Images/Checked.png",
      title2: "Total Files",
      colr: 'bg-[#FFFFFF]',
    },
  ];
  return (
    <main class="flex justify">

      <CollapseBar />
      <div>
        <h3 className="text-center text-lg text-red-400 border-b-2 border-b-slate-200 uppercase">
          Archive
        </h3>
        {/* Dashboard cards starts here */}
        <div className="grid  lg:grid-cols-3 md:grid-cols-1 gap-10 m-8">
          {cardData.map((data) => (
            <ARhomecard
              key={data.id}
              title={data.title}
              count={data.count}
              image={data.image}
              title2={data.title2}
              colr1={data.colr}
            />
          ))}
        </div>
      </div>

    </main>
  )
}

export default ARhome
