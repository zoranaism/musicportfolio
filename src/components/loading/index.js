import React from 'react';

const Loading = () => {
    return (
        <div className={'loading-wrap fixed-top'} style={{...loadingStyle}}>
            <h5>Loading...</h5>
        </div>
    );
};

const loadingStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: "rgba(255,255,255,0.9)"
};

export default Loading;