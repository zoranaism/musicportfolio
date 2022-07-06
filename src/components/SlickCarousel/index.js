import React from 'react';
import Slick from 'react-slick'
import 'slick-carousel/slick/slick.scss'

const SlickCarousel = ({children, settings}) => {
    return (
        <Slick {...settings}>
            {children}
        </Slick>
    );
};

export default SlickCarousel;
