import React from 'react';
import style from "./modal.module.css"

const Modal = ({children, close, cn,error}) => {
    return (
        <div className={style.bgModal} onClick={close}>
            <div className={style[cn]} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;