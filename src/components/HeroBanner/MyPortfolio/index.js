import React from "react";
import HeroBannerContainer from "../../../container/HeroBanner";
import personalInfo from "../../../data/personalInfo";

const BannerMyPortfolio = () => {
  return (
    <HeroBannerContainer overlay={false}>
      <div className="main-slider-content">
        <h2>Hello , I’m</h2>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.designation}</h2>
        <a target="_blank" href={`https://nfan.link/tears-of-sorrow-pre-save`}>
          Pre-save Tears of sorrow
        </a>
      </div>
    </HeroBannerContainer>
  );
};

export default BannerMyPortfolio;
