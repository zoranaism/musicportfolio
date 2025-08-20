import React from 'react';

const Input = ({type, name, id, placeholder, required}) => {
    return (
        type === 'textarea' ? (
            <textarea id={id} name={name} placeholder={placeholder} required={required}/>
        ) : (
            <input type={type} id={id} name={name} placeholder={placeholder} required={required}/>
        )
    );
};

export default Input;