import { useState } from "react"

export const LiftingState =() => {

        const [InputValue , setInputValue] =useState("");

    return(
        <>
        <InputComponent inputValue ={InputValue} setInputValue={setInputValue}/>
        <DisplayComponent inputValue ={InputValue}  />
        
        </>
    )
}

const InputComponent =({InputValue ,setInputValue}) =>
{
    // const [InputValue , setInputValue] =useState("");  //LiftUp to parent
    return(
        <>
        <input type="text"
        placeholder="Enter your Name"
        value={InputValue}
       onChange ={(e) => setInputValue(e.target.value)} >
        </input>
        </>
    )
}

const DisplayComponent=({inputValue}) =>{

    return(
        <p>The current input value is:{inputValue}</p>
    )
}