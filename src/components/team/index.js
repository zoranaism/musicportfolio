import React from 'react';

const Team = ({name, testimonial, designation, profilePhoto, socials}) => {
    return (
        <div className="team-item">
            <div className="team-inner">
                <img src={require('../../assets/images/team/' + profilePhoto)} alt={name}/>
                <div className="team-content">
                    <h4>{name}</h4>
                    <span>{testimonial}</span>
                    <div className='mt-2 text-sm'>{designation}</div>
                    <div className="team-social">
                        {socials.map(icon => (
                            <a key={icon.id}
                               href={`https://${icon.media}.com/${icon.username}`}
                               target="_blank"
                               rel="noreferrer noopener"
                            >
                                <i className={`fa fa-${icon.media}`}/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;