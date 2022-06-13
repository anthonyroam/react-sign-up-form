import React from "react";

function useInputError () {
    const [state, dispatch] = React.useReducer(reducer, initialState); 

    const {
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        confirmPasswordError,
    } = state

    const emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    const handleSubmit = form => {
        const formData = new FormData(form.current);
        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword")
        }

        data.firstName 
        ? dispatch({type: "FIRSTNAME_SUCCESS"}) 
        : dispatch({type: "FIRSTNAME_ERROR"})

        data.lastName 
        ? dispatch({type: "LASTNAME_SUCCESS"}) 
        : dispatch({type: "LASTNAME_ERROR"})

        emailRegex.test(data.email)
        ? dispatch({type: "EMAIL_SUCCESS"})
        : dispatch({type: "EMAIL_ERROR"})

        passwordRegex.test(data.password)
        ? dispatch({type: "PASSWORD_SUCCESS"})
        : dispatch({type: "PASSWORD_ERROR"})

        data.password === data.confirmPassword
        ? dispatch({type: "CONFIRMPASSWORD_SUCCESS"})
        : dispatch({type: "CONFIRMPASSWORD_ERROR"})

    }
    
    const handleChange = name => {
        if (name==="firstName") {
            console.log("tamo pasando")
            dispatch({type: "FIRSTNAME_SUCCESS"})
        }

        if (name==="lastName") {
            dispatch({type: "LASTNAME_SUCCESS"})
        }

        if (name==="email") {
            dispatch({type: "EMAIL_SUCCESS"})
        }

        if (name==="password") {
            dispatch({type: "PASSWORD_SUCCESS"})
        }

        if (name==="confirmPassword") {
            dispatch({type: "CONFIRMPASSWORD_SUCCESS"})
        }
    }

    return {
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        confirmPasswordError,
        dispatch,
        handleSubmit,
        handleChange,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FIRSTNAME_ERROR":
            return {
                ...state,
                firstNameError: true
            }
            break;
        case "FIRSTNAME_SUCCESS":
            return {
                ...state,
                firstNameError: false
            }
            break;    
        case "LASTNAME_ERROR":
            return {
                ...state,
                lastNameError: true
            }                
            break;
        case "LASTNAME_SUCCESS":
            return {
                ...state,
                lastNameError: false
            }                
            break;
        case "EMAIL_ERROR":
            return {
                ...state,
                emailError: true
            }                
            break;
        case "EMAIL_SUCCESS":
            return {
                ...state,
                emailError: false
            }                
            break;
        case "PASSWORD_ERROR":
            return {
                ...state,
                passwordError: true
            }                
            break;
        case "PASSWORD_SUCCESS":
            return {
                ...state,
                passwordError: false
            }                
            break;
        case "CONFIRMPASSWORD_ERROR":
            return {
                ...state,
                confirmPasswordError: true
            }                
            break;
        case "CONFIRMPASSWORD_SUCCESS":
            return {
                ...state,
                confirmPasswordError: false
            }                
            break;
        default:
            return {
                ...state
            }
            break;
    }
}

const initialState = {
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
}

export { useInputError };