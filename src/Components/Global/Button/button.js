import React from 'react';

const Button = ({children, ...props}) => {

    return (
        <button {...props} className="ContactBtn">
            {children}
        </button>
    );
};

export default Button;