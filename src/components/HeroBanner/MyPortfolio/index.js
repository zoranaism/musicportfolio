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
        <a target="_blank" href={`https://www.youtube.com/watch?v=NBiIf7ilQE4`}>
          Watch "Tears of sorrow" now!
        </a>
      </div>
    </HeroBannerContainer>
  );
};

export default BannerMyPortfolio;
