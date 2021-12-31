import React, {useState} from 'react';
import Modal from "../Global/Modal/modal";
import style from "./settings.module.css"
import avatar from "../Images/logo.png"
import {AiOutlineClose} from "@react-icons/all-files/ai/AiOutlineClose";

const Settings = ({setShowModal}) => {


    return (
        <Modal cn="bg" close={()=>{setShowModal(false)}}>

                <div className={style.div} >
                    <div className={style.one}>
                        <span> личные данные</span>
                        <p>
                            Вы всегда можете удалить или изменить данные
                        </p>
                    </div>
                    <div className={style.two}>
                        <div className={style.x} onClick={()=>setShowModal(false)}>
                            <AiOutlineClose/>
                        </div>
                        <div className={style.avatar}>
                            <img src={avatar}/>
                        </div>
                       <p>anun</p>
                       <p className={style.address}>Эл. адрес</p>
                       <button className={style.button}>изменить </button>
                        <span className={style.del}>удалить аккаунт</span>
                    </div>
                </div>
        </Modal>
    );
};

export default Settings;