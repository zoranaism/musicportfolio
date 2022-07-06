import React from 'react';

const Sidebar = ({title, children, classes}) => {
    return (
        <div className={`sidebar ${classes ? classes : ''}`}>
            {title && <h3 className="title">{title}</h3>}

            {children}
        </div>
    );
};

export default Sidebar;