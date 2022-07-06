import React from 'react';

const Map = ({text, lat, long}) => {
    return (
        <div className="row">
            <div className="col-lg-10 col-12 mb-45">
                <div className="contact-availability">
                    <h3>24/7 ANYTIME</h3>
                    <p>{text}</p>
                </div>
            </div>
            <div className="col-lg-10 col-12">
                <div id="contact-map">
                    <iframe
                        src={`https://maps.google.com/maps?q=${lat},${long}&hl=es&z=10&output=embed`}
                        title={'Contact Map'}
                        style={{width: '100%', height: '100%', border: 0}}
                    />
                </div>
            </div>
        </div>
    );
};

export default Map;