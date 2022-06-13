import React from "react";

const InputError = ({children}) => {
    return (
        <p className="text-left text-primary-red absolute right-6 text-xs">
            {children}
        </p>
    );
}

export { InputError }