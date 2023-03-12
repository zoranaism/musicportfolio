import React from "react";
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from "../../../assets/images/hero/BannerImage1.png";
import sorrowBG from "../../../assets/images/hero/sorrow.webp";

import personalInfo from "../../../data/personalInfo";

const BannerMyPortfolio = () => {
  return (
    <HeroBannerContainer bg={sorrowBG} overlay={false}>
      <div className="main-slider-content">
        <h2>Hello , I’m</h2>
        <h1>{personalInfo.name}</h1>
        <h3>{personalInfo.designation}</h3>
        <p>next single "Tears of sorrow" releases on 28th April</p>
        {/* <a href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`}>
          Sign up to my newsletter
        </a> */}
      </div>
    </HeroBannerContainer>
  );
};

export default BannerMyPortfolio;
