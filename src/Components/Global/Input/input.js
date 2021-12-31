import React from 'react';
import style from "./input.module.css"

const Input = ({cn,type,error,onChange,placeholder,...props}) => {
    return (
            <label>
                <input
                    className={style[cn]}
                    type={type}
                    {...props}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <span>{error}</span>
            </label>
    );
};

export default Input;
