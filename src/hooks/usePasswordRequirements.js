import React from "react";

const usePasswordRequirements = () => {
    const [numberOfCharacters, setNumberOfCharacters] = React.useState(false)
    const [number, setNumber] = React.useState(false)
    const [upperCase, setUpperCase] = React.useState(false)
    const [lowerCase, setLowerCase] = React.useState(false)
    const [specialCharacter, setSpecialCharacter] = React.useState(false)

    const hasNumberRegex = /[0-9]/
    const hasUpperCaseRegex = /(?=.*[A-Z])/
    const hasLowerCaseRegex = /(?=.*[a-z])/
    const hasSpecialCharacterRegex = /(?=.*[@!#$%&? "])/

    const handleChange= (event) => {
        
        let password = event.target.value

        password.length >= 8
        ? setNumberOfCharacters(true)
        : setNumberOfCharacters(false)

        hasNumberRegex.test(password) 
        ? setNumber(true)
        : setNumber(false)

        hasUpperCaseRegex.test(password)
        ? setUpperCase(true)
        : setUpperCase(false)

        hasLowerCaseRegex.test(password)
        ? setLowerCase(true)
        : setLowerCase(false)

        hasSpecialCharacterRegex.test(password)
        ? setSpecialCharacter(true)
        : setSpecialCharacter(false)
    }

    return {
        numberOfCharacters,
        number,
        upperCase,
        lowerCase,
        specialCharacter,
        handleChange,
    };
}

export { usePasswordRequirements };