import React from 'react'

function CheckOutCard() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 border border-black bg-[#D4EDFB] rounded-2xl">
        <div className="col-span-2 lg:mt-4 lg:mx-4">
        <div class="w-11/12 h-16  bg-slate-900 rounded-40px border-4 border-slate-50 rounded-full justify-center items-center gap-2.5 inline-flex">
    <div class="w-182 text-slate-50 text-2xl font-semibold font-Outfit uppercase leading-7">checked out</div>
</div>

        </div>
        <div className="row-span-3">
        <img src="Images/checkoutcardbuttonlogo.png" alt ="Checkout Card button logo" class="fill-current w-4/5 lg:ml-4 lg:mt-16"/>
        </div>
        <div className="col-span-2 lg:mt-6 lg:ml-40">
            <span className="text-5xl text-[#A71010] font-bold">05</span>
        </div>
        <div className="col-span-2 lg:mt-6 lg:ml-28">
        <span className="text-2xl text-[#0F172A] font-semibold">TOTAL FILES</span>
        </div>
    </div>
  )
}
  
export default CheckOutCard