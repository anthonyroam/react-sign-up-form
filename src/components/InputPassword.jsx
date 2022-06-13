import React from "react";
import { PasswordRequirement } from "./PasswordRequirements";
import { usePasswordRequirements } from "../hooks/usePasswordRequirements";

const InputPassword = ({type, name, placeholder, error, dispatch}) => {
    const {
        numberOfCharacters,
        number,
        upperCase,
        lowerCase,
        specialCharacter,
        handleChange,
    } = usePasswordRequirements();
    
    const [focused, setFocused] = React.useState(false);

    return (
        <div className="relative">
            <input 
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={e => handleChange(e, dispatch)}            
                type={type}
                placeholder={!error ? placeholder : null}
                name={name}
                className={`w-full border-2 border-grayish-blue p-2 rounded-md text-dark-blue font-bold   placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-dark-blue focus:border-2 focus:border-dark-blue
                ${!!error && "border-primary-red"}`}
            />
            {!!error && <div className="h-6 w-6 absolute right-2 top-3  bg-icon-error bg-cover"/>}
            {focused && <PasswordRequirement 
                numberOfCharacters={numberOfCharacters} 
                number={number}
                upperCase={upperCase}
                lowerCase={lowerCase}
                specialCharacter={specialCharacter}
            />}
        </div>
    );
}

export { InputPassword };