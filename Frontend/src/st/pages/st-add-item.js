// import fileService from "../services/add-file-service";
// import sectionService from "../services/add-section-service";
// import rackService from "../services/add-rack-service";

import React, { useState } from "react";
import STCollapseBar from "../components/ar-file-collapse-bar";
import {
    FloatingLabel,
    Select,
    Label,
    Radio,
    TextInput,
    Modal,
    Button,
    FileInput,
    Avatar,
    Spinner,
    Table,
  } from "flowbite-react";
  import { HiMail, HiOutlineSave,HiDocumentDuplicate } from "react-icons/hi";
  import {
    FaPhone,
    FaCalendar,
    FaSearch,
    FaSyncAlt,
    FaEraser,
    FaSearchMinus
  } from "react-icons/fa";
  
  import {
    MdDelete,
    MdDoneOutline,
    MdRadioButtonUnchecked,
    MdError,
  } from "react-icons/md";
  import { IoIosWarning } from "react-icons/io";
import { useParams } from "react-router-dom";

import ItemService from "../services/st-item-service";
import CategoryService from "../services/st-category-service";


  const STAddItem=(props)=>{
    const {id}=useParams();
  
    const [categories,setCategories]=React.useState([]);
    const [existingItems,setExistingItems]=React.useState([]);

    const [message, setMessage] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [show, setShow] = React.useState(false);

    const [item,changeItem]=useState({
     itemName:"",
     itemCategory:0
  })

  console.log(item);
  // const filePayload = {
  //   fileNumber: file.fileNumber,
  //   fileName: file.fileName,
  //   archiveSectionId: file.section,
  //   archiveSubjectId: file.subject,
  //   year: file.year,
  //   rackId: file.rackNumber,
  //   boxNumber: file.boxNumber,
  //   fileIndex: file.fileIndex
  // };
    
    const fetchCategories=()=>{
      CategoryService.getAllCategories()
      .then((response)=>{
        setCategories(response.data);
          console.log(response.data);
          console.log("successfully fetch data to the store(getSectionById)");
          console.log(categories);
      })
      .catch((e)=>{
          console.log("error when fetching data to the ar-add-files(getSectionById)");
          console.log(e);
      })
  }



    
  React.useEffect(()=>{
    fetchCategories();
  },[])

  

  
    

     function handleChange(event){
      
        changeItem({
            ...item,
            [event.target.name]:event.target.value
        })    
    }
    
  

  const addItem= async() => {
    // if (file.fileNumber=== "") {
    //   setMessage("FILE number is required"); // to be removed  //Empty to Required
    //   setTitle("Empty");
    //   setOpenModal(true);
    // } else 
    if (item.itemName === "") {
      setMessage("ITEM NAME IS REQUIRED");
      setTitle("Empty");
      setOpenModal(true);
    } else if (item.itemCategory === "") {
      setMessage("CATEGORY IS NOT SELECTED");
      setTitle("Empty");
      setOpenModal(true);
  
    } else{
      try {
        const itemData = {
          itemName: item.itemName,
          itemCategory: parseInt(item.itemCategory) // Convert itemCategory to integer
        };
        console.log(itemData);
        const response = await ItemService.saveItem(itemData);
         if (response.status===200) {
          setMessage(response.data);
          setTitle("Success");
          setOpenModal(true);
          resetFileData();
         }

      } catch (error) {
        if ( error.response.status === 409) {
          setMessage(error.response.data);
          setTitle("Duplicate");
          setOpenModal(true);
          console.log("response with status 409 (Conflict)"+error.response.data);

        }
      // else if(error.response){
      //   setMessage(error.response.data);
      //     setTitle("Duplicate");
      //     setOpenModal(true);
      //     console.log(error.response.data);
      // }
        
      }
    }
    
    
}




const deleteItem=async ()=>{
  if (item.itemName=== "") {
    setMessage("Item Name is Required");
    setTitle("Empty");
    setOpenModal(true);
  }else{
    try {
      const response=await ItemService.removeItem(id)
        if(response.status===200){
            setMessage(response.data);
            setTitle("Success");
            setOpenModal(true);
        }
      
        //console.log(response.data);
      
    } catch (error) {
      if(error.response.status===404){
        setMessage(error.response.data);
        setTitle("Not Found");
        setOpenModal(true);
        console.log('Error Deleting file:'+error.response.data);
      }
      //console.error('Error Deleting file:', error);
    }
    // fetchItems();
  }

 }


  
  function resetFileData(){
        changeItem(prevFile=>{
            return({
              itemName:"",
              itemCategory:""

            }
                
            )
        })
    }
    

  
    const categoriesJSX=categories.map(category=>(
      <option key={category.id} value={category.id}>{category.categoryName}</option>
    ))
    

    return(
        <div className="flex flex-col  gap-2 m-5">
           <STCollapseBar/>
        <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
          Add New Item
        </h3>

        


        {/* file details are start from here */}
        <div style={{ fontFamily: "Noto Sans Sinhala" }}>
          <fieldset className="border rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-end p-5 gap-5 m-5">
            <legend className="text-slate-600 uppercase">Trying something</legend>
                                                          {/* Section Name ..................................*/}
            <FloatingLabel
              variant="filled"
              label="ITEM NAME"
              name="itemName"
              value={item.itemName}
              onChange={handleChange}
            />
           
             <div className="mb-2">
              <Label
                htmlFor="designation"
                className="m-1 mb-2 text-slate-500 text-center text-base uppercase"
              >
                Category
              </Label>
              <Select
                style={{ fontFamily: "Noto Sans Sinhala" }}
                id="itemCategory"
                name="itemCategory"
                value={item.itemCategory}
                onChange={handleChange}
              >
                <option value="">-----SELECT A CATEGORY----</option>
                {/* <option value="සභාපති">සභාපති</option>
                <option value="ලේකම්">ලේකම්</option>
                <option value="කළමණාකරණ සේවා නිලධාරී">
                  කළමණාකරණ සේවා නිලධාරී
                </option> */}
                {categoriesJSX}
              </Select>
            </div>
   
            <Button className="uppercase w-52" 
            onClick={addItem}
          >
            {" "}
            <HiOutlineSave className="mr-2 h-5 w-5" />
            Add Item                                   {/* adddbutton-------------------- */}
            
          </Button>

 
          <Button
            className="uppercase w-52"
            color="failure"
            onClick={deleteItem}
          >
            {" "}
            <MdDelete className="mr-2 h-5 w-5" />
             Delete Item      {/*Deletebutton-------------------- */}
          </Button>
          <Button
            className="uppercase w-52 bg-slate-600"
            onClick={resetFileData}
          >
            {" "}
            <FaEraser className="mr-2 h-5 w-5" /> Clear Item     {/*Clearbutton-------------------- */}
          </Button>
            
          </fieldset>
        </div>
      

        {/* Table ends here */}
        {/* Personlan details ends here */}
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        
        <Modal.Header>
          {title === "Processing" && (
            <Spinner size="xl" />
          )}
          {title === "Error" && (
            <MdError className="inline-block text-red-500 text-4xl mr-5" />
          )}
          {title === "Empty" && (
            <MdRadioButtonUnchecked className="inline-block text-red-500 text-4xl mr-5" />
          )}
          {title === "Duplicate" && (
            <HiDocumentDuplicate className="inline-block text-yellow-400 text-4xl mr-5" />
          )}
          {title === "Warning" && (
            <IoIosWarning className="inline-block text-amber-500 text-4xl mr-5" />
          )}
          {title === "Not Found" && (
            <FaSearchMinus className="inline-block text-yellow-500 text-4xl mr-5" />
          )}
          {title === "Success" && (
            <MdDoneOutline className="inline-block text-lime-600 text-4xl mr-5" />
          )}
          {title}
        </Modal.Header>
        <Modal.Body>
          <div className="normal-case text-center">{message}</div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button onClick={() => setOpenModal(false)}>Close</Button>
          <Button
            // onClick={() => {
            //   EmployeeService.removeEmployee(serachId)
            //     .then((response) => {
            //       resetEmployeeData();
            //       setShow(false);
            //       setMessage(serachId + " පද්ධතියෙන් සාර්ථකව ඉවත් කරන ලදී ");
            //       setTitle("Success");
            //       setOpenModal(true);
            //     })
            //     .catch((e) => {
            //       console.log(e);
            //     });
            //   setOpenModal(false);
            // }}
            style={{ display: show ? "block" : "none" }}
            color="failure"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
  }

  export default STAddItem;