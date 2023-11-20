import React, { Dispatch, SetStateAction } from 'react'

interface IInputProps{
    fontSize: string;
    placeholder: string;
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

const Input = ({placeholder, state, setState, fontSize}: IInputProps) => {
  return (
    <input 
    style={{
        padding: "0.5rem 1rem",
        border: "none",
        borderBottom: "1px solid #898989",
        fontSize: fontSize,
      }}

    type='text'
    placeholder={placeholder}
    value={state}
    onChange={(e) => setState(e.target.value)}/>
  )
}

export default Input