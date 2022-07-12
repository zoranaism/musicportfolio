import React from "react";
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from "../../../assets/images/singleportoflio/animation.webp";
import personalInfo from "../../../data/personalInfo";

const BannerPersonalPortfolio = () => {
  return (
    <HeroBannerContainer bg={bannerBg} overlay={false}>
      <div className="main-slider-content">
        <h1 style={{ color: "white" }}>{personalInfo.single}</h1>
        <h2 style={{ color: "white" }}>{personalInfo.band}</h2>
        <h5  style={{ color: "white" }}>RELEASE DATE: 31th JULY, 2022</h5>
        <a target="_black" style={{ color: "white", border: "2px solid white", padding: "10px 20px" }} href={`${personalInfo.link}`}>
          Pre-listen link
        </a>
      </div>
    </HeroBannerContainer>
  );
};

export default BannerPersonalPortfolio;
