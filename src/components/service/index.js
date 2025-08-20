import React from 'react';

const Service = ({title, content}) => {
    return (
        <div className="service-item">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Service;