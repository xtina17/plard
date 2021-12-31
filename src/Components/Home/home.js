import React, {useState} from 'react';
import Main from "../Main/main";
import {useSelector} from "react-redux";
import logo from "../Images/logo.png";

const Home = () => {
    return (
        <div>
            <img src={logo}/>
        </div>
    );
};

export default Home;