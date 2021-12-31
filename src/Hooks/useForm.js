import {useState} from "react";
import useValidation from "./useValidation";

const useForm = (initialValue, name, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isTouched, setTouched] = useState(false)

    const validate = useValidation(value, name, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setTouched(true)
    }

    return {
        value,
        onChange,
        isTouched,
        onBlur,
        ...validate,
    }
}

export default useForm