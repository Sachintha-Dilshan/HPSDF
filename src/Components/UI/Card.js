import React from "react";

function Card() {
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];
  return (
    <div className="flex flex-col items-center justify-between p-5 m-5 rounded-2xl shadow-lg transform hover:scale-105 transition ease-out duration-500 cursor-pointer">
      <img
        src={people[0].imageUrl}
        alt="profile"
        className="h-20 w-20 rounded-full"
      />
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-center">Ms. Nalika Abeykoon</p>
        <p className="font-semibold text-sm text-center my-2">Secretory</p>
        <div>
          <i className="fas fa-phone"><span className="px-2">041 2286275</span></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
