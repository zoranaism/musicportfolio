import React from 'react';
import PropTypes from "prop-types";

const PortfolioDetailsYoutube = ({links}) => {
    const toEmbedUrl = (url) => {
    return url.replace("watch?v=", "embed/");
    };

    return (
        <div className="portfolio-details-image mb-sm-30 mb-xs-30">
            {links && links.map((link, index) => (
                <iframe
                key={index}
                width="100%"
                height="372"
                src={`${toEmbedUrl(link)}?rel=0&modestbranding=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                ></iframe>
            ))}
        </div>
    );
};

PortfolioDetailsYoutube.propsType = {
    links: PropTypes.array.isRequired
};

export default PortfolioDetailsYoutube;




