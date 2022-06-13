import React from "react";
import { Input } from "./Input";
import { useInputError } from "../hooks/useInputError";
import { InputError } from "./InputError";
import { InputContainer } from "../containers/InputContainer";
import { Button } from "./Button";
import { TermsAndServices } from "./TermsAndServices";
import { InputPassword } from "./InputPassword";

const Form = () => {
    const form = React.useRef(null);
    const {
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        confirmPasswordError,
        handleSubmit,
        handleChange,
    } = useInputError()

    return (
        <form
            className="h-auto w-full p-6 flex flex-col items-center justify-center gap-6 rounded-lg shadow-md bg-white relative"
            ref={form}
        >
            <InputContainer>
                <Input 
                    type="text" 
                    placeholder="First Name" 
                    name="firstName" 
                    error={firstNameError} 
                    handleChange={handleChange} 
                />
                {firstNameError && <InputError>first name cannot be empty</InputError>}
            </InputContainer>    
            <InputContainer>
                <Input 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName" 
                    error={lastNameError} 
                    handleChange={handleChange} 
                />
                {lastNameError && <InputError>last name cannot be empty</InputError>}
            </InputContainer>
            <InputContainer>
                <Input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email" 
                    error={emailError} 
                    handleChange={handleChange} 
                />
                {emailError && <InputError>looks like this is not an email</InputError>}
            </InputContainer>
            <InputContainer>
                <InputPassword 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    error={passwordError} 
                />
            </InputContainer>
            <InputContainer>
                <Input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="confirmPassword" error={confirmPasswordError} 
                    handleChange={handleChange} 
                />
                {confirmPasswordError && <InputError>password do not match</InputError>}
            </InputContainer>
            <Button 
                type="button" 
                handleClick={() => handleSubmit(form)}
            >
                CLAIM YOUR FREE TRIAL
            </Button>
            <TermsAndServices />
        </form>
    );
}

export { Form };