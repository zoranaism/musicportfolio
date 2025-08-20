import React from 'react';
import {Link} from "react-router-dom";

const PortfolioDetailsContent = ({title, slug, category, description, meta}) => {
    return (
        <div className="portfolio-details-content">
            <Link to={`/portfolio/${slug}`} className="category">{category}</Link>
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <ul className="project-info">
                <li><span>Client:</span> {meta?.client}</li>
                <li><span>Date:</span> {meta?.date}</li>
                <li><span>Website:</span>
                    <a href={meta?.website}
                       target="_blank"
                       rel="noopener noreferrer">{meta?.website}
                    </a>
                </li>
                <li>
                    <span>Tags:</span>
                    {meta?.services.map((service, index) => (
                        <a key={index} href="/">{service}</a>
                    ))}
                </li>
            </ul>

            <div className="project-share">
                <span>Share:</span>
                <a href="/"><i className="fa fa-facebook"/></a>
                <a href="/"><i className="fa fa-twitter"/></a>
                <a href="/"><i className="fa fa-pinterest-p"/></a>
                <a href="/"><i className="fa fa-google-plus"/></a>
            </div>

        </div>
    );
};

export default PortfolioDetailsContent;