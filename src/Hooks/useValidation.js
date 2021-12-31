import {useEffect, useState} from "react";
import {validateEmail, validateMessage, validatePassword, validatePhone, validateUserName} from "../Utils/regex"
const useValidation = (value, name, validations) => {

    const [errors, setErrors] = useState({})
    const [isEmpty, setEmpty] = useState(true)
    const [isEmailError, setEmailError] = useState(false)
    const [isPasswordError, setPasswordError] = useState(false)
    const [isNameError, setNameError] = useState(false)
    const [isPhoneError, setPhonError] = useState(false)
    const [isMessageError, setMessageError] = useState(false)
    const [isConfirmPassword, setConfirmPassword] = useState(false)
    const [islastNameError, setLastName] = useState(false)

    const [isValidateForm, setValidateForm] = useState(false)

    useEffect(() => {
        for (let validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'isEmail':
                    validateEmail(value) ? setEmailError(false) : setEmailError(true)
                    break
                case 'isPassword':
                    validatePassword(value) ? setPasswordError(false) : setPasswordError(true)
                    break
                case 'isName':
                    validateUserName(value) ? setNameError(false) : setNameError(true)
                    break
                case 'isPhone' :
                    validatePhone(value) ? setPhonError(false) : setPhonError(true)
                    break
                case 'isMessage':
                    validateMessage(value) ? setMessageError(false) : setMessageError(true)
                    break
                case 'isConfirmPassword':
                    validatePassword(value) ? setConfirmPassword(false) : setConfirmPassword(true)
                    break
                case 'isLastName':
                    validateUserName(value) ? setLastName(false) : setLastName(true)
                    break
                default:
                    return null
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty) {
            setErrors({
                ...errors,
                [name]: `${name} is required`
            })
        } else if (isEmailError) {
            setErrors({
                ...errors,
                [name]: "Email is wrong"
            })
        } else if (isPasswordError) {
            setErrors({
                ...errors,
                [name]: "Must be at least 6 characters"
            })
        } else if (isNameError) {
            setErrors({
                ...errors,
                [name]: "Name is incorrect"
            })
        } else if (isPhoneError) {
            setErrors({
                ...errors,
                [name]: "Phone is incorrect"
            })
        } else if (isMessageError) {
            setErrors({
                ...errors,
                [name]: "Message is incorrect"
            })
        } else if (isConfirmPassword) {
            setErrors({
                ...errors,
                [name]: "Confir is wrong"
            })
        } else if (islastNameError) {
            setErrors({
                ...errors,
                [name]: "Last Name is incorrect"
            })
        } else {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }, [isEmpty, isEmailError, isPasswordError, isNameError, isPhoneError, isMessageError, isConfirmPassword, islastNameError])


    useEffect(() => {
        if (!isEmpty && !isEmailError && !isPasswordError && !isNameError && !isPhoneError && !isMessageError && !isConfirmPassword && !islastNameError) {
            setValidateForm(true)
        } else {
            setValidateForm(false)
        }
    }, [isEmpty, isEmailError, isPasswordError, isNameError, isPhoneError, isMessageError, isConfirmPassword, islastNameError])

    return {
        errors,
        isValidateForm
    }
}

export default useValidation