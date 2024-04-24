import React from "react";
import { useLocation } from "react-router-dom";
import STCollapseBar from "../components/ar-file-collapse-bar";
import { Select ,FloatingLabel,Label,Button} from "flowbite-react";
import {HiOutlineSave} from "react-icons/hi";



function STCheckInOutItems(){
    const location=useLocation();
    const item = location.state && location.state.item;
    console.log("huuuuuu");
    console.log(item);


    return(
        <main>
            <STCollapseBar/>
              <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
                ITEM EXCHANGE
             </h3>
             <fieldset className="border rounded-lg grid lg:grid-cols-4 p-5 gap-5 m-5">
                <legend >
                    Check In Item
                </legend>
                <FloatingLabel
              variant="filled"
              label="ITEM NAME"
              name="itemName"
            //   value={item.itemName}
            //   onChange={handleChange}
            />
           
             <div className="mb-2">
              <Label
                htmlFor="designation"
                className="m-1 mb-2 text-slate-500 text-center text-base uppercase"
              >
                Category
              </Label>
              <Select
                id="category"
                name="category"
                // value={item.Category}
                // onChange={handleChange}
              >
                <option value="">-----SELECT A CATEGORY----</option>
                </Select>
                </div>
                <FloatingLabel
              variant="filled"
              label="Quantity"
              name="itemquantity"
            //   value={item.itemName}
            //   onChange={handleChange}
            />
               <FloatingLabel
              variant="filled"
              label="Seller"
              name="seller"
            //   value={item.itemName}
            //   onChange={handleChange}
            />
              <Button className="uppercase w-52" 
            // onClick={addItem}
          >
            {" "}
            <HiOutlineSave className="mr-2 h-5 w-5" />
            Add Item                                   {/* adddbutton-------------------- */}
            
          </Button>


            </fieldset>
            <fieldset className="border rounded-lg grid lg:grid-cols-4 p-5 gap-5 m-5">
                <legend >
                    Check Out Item
                </legend>
                <FloatingLabel
              variant="filled"
              label="ITEM NAME"
              name="itemName"
            //   value={item.itemName}
            //   onChange={handleChange}
            />
           
             <div className="mb-2">
              <Label
                htmlFor="designation"
                className="m-1 mb-2 text-slate-500 text-center text-base uppercase"
              >
                Category
              </Label>
              <Select
                id="category"
                name="category"
                // value={item.Category}
                // onChange={handleChange}
              >
                <option value="">-----SELECT A CATEGORY----</option>
                </Select>
                </div>
                <FloatingLabel
              variant="filled"
              label="Quantity"
              name="itemquantity"
            //   value={item.itemName}
            //   onChange={handleChange}
            />
               <FloatingLabel
              variant="filled"
              label="Employee Id"
              name="employeeId"
            //   value={item.itemName}
            //   onChange={handleChange}
            />
              <Button className="uppercase w-52" 
            // onClick={addItem}
          >
            {" "}
            <HiOutlineSave className="mr-2 h-5 w-5" />
            Check Out Item                                 {/* adddbutton-------------------- */}
            
          </Button>

            </fieldset>
        </main>
    )
}

export default STCheckInOutItems;