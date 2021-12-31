import React from 'react';
import style from "./logo.module.css";
import {AiOutlineSearch} from "react-icons/ai"
const Logo = () => {
    return (
        <div className={style.svg}>
            <AiOutlineSearch/>
        </div>
    );
};

export default Logo;