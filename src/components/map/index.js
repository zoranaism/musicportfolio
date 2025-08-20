import React from 'react';

const Map = ({text}) => {
    return (
        <div className="row">
            <div className="col-lg-10 col-12 mb-45">
                <div className="contact-availability">
                    <h3>Work With Me</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Map;