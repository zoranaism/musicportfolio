import React from "react";
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from '../../../assets/images/hero/BannerImage.png'
import personalInfo from "../../../data/personalInfo";

const BannerMyPortfolio = () => {
  return (
    <HeroBannerContainer bg={bannerBg} overlay={false}>
      <div className="main-slider-content">
        <h2>Hello , I’m</h2>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.designation}</h2>
        <h4>next single: "Tears of sorrow" coming soon</h4>
        {/* <a href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`}>
          Sign up to my newsletter
        </a> */}
      </div>
    </HeroBannerContainer>
  );
};

export default BannerMyPortfolio;
