import React from 'react';
import socialIcons from '../../data/social-networks'

const HeaderSocial = () => {

    return (
        <div className="header-social d-flex align-items-center justify-content-end col-lg-2 col-6">
            {socialIcons.map(social => (
                <a key={social?.id}
                   href={social?.url}
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <i className={`fa fa-${social?.media}`}/>
                </a>
            ))}
        </div>
    );
};

export default HeaderSocial;
