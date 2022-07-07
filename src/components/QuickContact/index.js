import React from 'react';

const QuickContact = ({phone, email, location}) => {
    return (
        <div className="contact-info">
            <h3>QUICK CONTACT</h3>
            <ul>
                {/* <li>
                    <span>Phone:</span>
                    <a href={`tel:${phone}`}>0684359770</a>
                </li> */}
                <li>
                    <span>Email:</span>
                    <a href={`mailto:zoranaism@gmail.com`}>zoranaism@gmail.com</a>
                </li>
                <li>
                    <span>Location:</span>Den Bosch, The Netherlands
                </li>
            </ul>
        </div>
    );
};

export default QuickContact;