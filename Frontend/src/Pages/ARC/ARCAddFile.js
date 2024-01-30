import InputField from "../../Components/ARC/InputField";
import Button from "../../Components/ARC/button";
import CollapseBar from "../../Components/ARC/ArcCollapsBar";
import React,{useState} from "react";



export default function ARCAddFile(props){
    const [file,changeFile]=useState({
        fileNumber:"",
        fileName:"",
        section:"",
        subject:"",
        year:"",
        rackNumber:"",
        boxNumber:"",
        fileIndex:""
        
        
    });

    function handleChange(event){
        changeFile(prevCont=>({
            ...prevCont,
            [event.target.name]:event.target.value
        }
            
        ))
    }
    
    function handleSubmit(event){
        event.preventDefault();
        console.log(file);
    }
    const handleClear = () => {
        // Clear the form by resetting the state to initial values
        changeFile({
            fileNumber:"",
            fileName:"",
            section:"",
            subject:"",
            year:"",
            rackNumber:"",
            boxNumber:"",
            fileIndex:""
        });
      };

    const subject=
    <div className="w-3/4 mx-auto my-4">
    <label for="countries" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
    <hr className="mb-1"></hr>
    <select id="countries" name="subject" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
    </select>
    </div>

    const rackNumber=
    <div className="w-3/4 mx-auto my-4">
    <label for="countries" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Rack Number</label>
    <hr className="mb-1"></hr>
    <select id="countries" name="rackNumber" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a Rack Number</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
    </select>
    </div>

    return (
        <main>
        
        <CollapseBar/>
        <form className="gap-4 grid grid-cols-1 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="col-span-2">
                <h1 className="text-center text-emerald-600">{props.crud}</h1>
                <hr className="bg-gray-300 h-0.5 w-full"></hr>
            </div>
        
            <div >
           
            
            <InputField label="File Number" placholder="File Number" type="text" name="fileNumber" valuee={file.fileNumber} onChange={handleChange} />
            <InputField label="File Name" placholder="Enter File Name" type="text" name="fileName" valuee={file.fileName} onChange={handleChange}/>
            <InputField label="Section" value="defaultvalue" type="text"  disabled="disabled"/>
            {subject}
            {/* <InputField label="Subject" placholder="Enter Subject" name="subject" onChange={handleChange}/> */}
            <InputField label="Year" placholder="Enter Year" type="text"  name="year" valuee={file.year}  onChange={handleChange}/>
            
            </div>
            <div>
                {rackNumber}
                <InputField label="Box Number" placeholder="Enter Box Number" type="text"  name="boxNumber" onChange={handleChange}/>
                <InputField label="File Index" placeholder="Enter File Index" type="text"  name="fileIndex" onChange={handleChange}/>
                
                 <div className="flex justify-normal w-3/4 mx-auto">
                    <Button text={props.crud} type="submit" />
                    <Button text="Clear"   type="button" onClick={handleClear}/>
                 </div>
                
                
            </div>
            </form>
            </main>
            // flex-col max-w-md
    
    )

}

