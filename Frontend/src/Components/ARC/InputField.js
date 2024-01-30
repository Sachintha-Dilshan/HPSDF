import React from "react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';



export default function InputField(props){
    return(
        
        <div className="w-3/4 mx-auto my-4">
          <div className="mb-0 ">
            <Label htmlFor="email1" value={props.label} />
          </div>
          <hr className="mb-1"></hr>
          <TextInput id="email1" type={props.type} placeholder={props.placholder} name={props.name} value={props.value} onChange={props.onChange} disabled={props.disabled} required />
          {/* // "name@flowbite.com" */}
        </div>
            
        
    )
}
