import React from 'react';

const Skill = ({title, percentage}) => {
    return (
        <div className="single-skill">
            <span>{title}</span>
            <div className="skill-bar">
                <div className="skill-progress" style={{width: `${percentage}%`}} data-progress={`${percentage}%`} />
            </div>
        </div>
    );
};

export default Skill;