import React from "react";

const PasswordRequirement = ({numberOfCharacters, number, upperCase, lowerCase, specialCharacter}) => {
    
    return (
        <div className="p-2 text-xs text-primary-red transition-all">
            <p className={`${numberOfCharacters && "text-green-500"}`} >Must be at least 8 characters</p>
            <p className={`${number && "text-green-500"}`}>Must contain at least 1 number</p>
            <p className={`${upperCase && "text-green-500"}`}>Must contain at least 1 letter in capital case</p>
            <p className={`${lowerCase && "text-green-500"}`}>Must contain at least 1 letter in small case</p>
            <p className={`${specialCharacter && "text-green-500"}`}>Must contain at least 1 special character</p>
        </div>
    );
}

export { PasswordRequirement };