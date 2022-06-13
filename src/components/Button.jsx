import React from "react";

const Button = ({type, handleClick, children}) => {
    return (
        <button 
            type={type}
            onClick={handleClick}
            className="w-full h-auto text-center p-4 rounded-md bg-primary-green text-white font-semibold shadow-sm shadow-primary-green"
        >
            {children}
        </button>
    );
}

export { Button };