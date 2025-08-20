import React from 'react';
import {Container} from 'react-bootstrap'

const HeroBannerContainer = ({children, overlay, bg}) => {
    return (
        <div className={`section main-slider-1 ${overlay ? 'banner-overlay' : null}`} style={{backgroundImage: `url(${bg})`}}>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default HeroBannerContainer;