import React from 'react';
import PropTypes from "prop-types";

const PortfolioDetailsThumb = ({images, title}) => {
    return (
        <div className="portfolio-details-image mb-sm-30 mb-xs-30">
            {images && images.map((image, index) => (
                <img key={index} src={require('../../../../assets/images/portfolio/' + image)} alt={title}/>
            ))}
        </div>
    );
};

PortfolioDetailsThumb.propsType = {
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default PortfolioDetailsThumb;