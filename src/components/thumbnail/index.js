import React from 'react';

const Thumbnail = ({classes, thumb}) => {
    return (
        <div className={classes}>
            <img src={require('../../assets/images/' + thumb)} alt="thumb"/>
        </div>
    );
};

export default Thumbnail;