import React from 'react';

const QuickContact = ({phone, email, location}) => {
    return (
        <div className="contact-info">
            <h3>QUICK CONTACT</h3>
            <ul>
                <li>
                    <span>Phone:</span>
                    <a href={`tel:${phone}`}>{phone}</a>
                </li>
                <li>
                    <span>Email:</span>
                    <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                    <span>Location:</span>{location}
                </li>
            </ul>
        </div>
    );
};

export default QuickContact;