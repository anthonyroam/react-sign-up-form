import React from "react";
import { useInputError } from "../hooks/useInputError";

const Input = ({type, placeholder, name, error, handleChange}) => {
    // const { handleChange } = useInputError()
    
    const typeError = (name) => {
        if (name==="email") {
            return "example@gmail.com"
        } else {
            return null
        }
    }
    
    return (
        <div className="relative">
            <input 
            type={type}
            placeholder={!error ? placeholder : typeError(name)}
            name={name}
            onChange={() => handleChange(name)}
            className={`w-full border-2 border-grayish-blue p-2 rounded-md text-dark-blue font-bold   placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-dark-blue focus:border-2 focus:border-dark-blue
            ${!!error && "border-primary-red"} 
            ${!!error && name === "email" && "placeholder:text-red-600 placeholder:font-bold"}`}
            />
            {!!error && <div className="h-6 w-6 absolute right-2 top-1/2 -translate-y-1/2 bg-icon-error bg-cover"/>}
        </div>
    );
}

export { Input };