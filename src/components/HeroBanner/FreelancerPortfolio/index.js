import React from 'react';
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from '../../../assets/images/hero/slider-1.jpg'
import personalInfo from '../../../data/personalInfo';

const BannerFreelancerPortfolio = () => {
    return (
        <HeroBannerContainer bg={bannerBg} overlay={true}>
            <div className={'text-center'}>
                <div className="slider-banner-info text-center">
                    <h2 className="slider-banner-title">Hello, I’m <b>{personalInfo.name}</b></h2>
                    <h5 className="slider-banner-text">{personalInfo.designation}</h5>
                </div>
            </div>
        </HeroBannerContainer>
    );
};

export default BannerFreelancerPortfolio;