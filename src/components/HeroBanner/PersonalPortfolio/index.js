import React from "react";
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from "../../../assets/images/singleportoflio/animation.webp";
import personalInfo from "../../../data/personalInfo";
import youtube from "../../../assets/images/socials/youtube.png";
import spotify from "../../../assets/images/socials/spotify.png";
import apple from "../../../assets/images/socials/apple2.png";

import soundcloud from "../../../assets/images/socials/soundcloud1.png";

const BannerPersonalPortfolio = () => {
  return (
    <HeroBannerContainer bg={bannerBg} overlay={false}>
      <div className="main-slider-content">
        <h3 style={{ color: "white" }}>OUT NOW!!!</h3>

        <h1 style={{ color: "white" }}>{personalInfo.single}</h1>
        <h2 style={{ color: "white" }}>{personalInfo.band}</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <a
            target="_black"
            style={{
              color: "white",
              border: "2px solid white",
              padding: "10px 20px",
              height: "70px",
              width: "200px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href={`https://youtu.be/hD4VnPaudaw`}
          >
            <img
              style={{ height: "30px", width: "auto", margin: "0 auto" }}
              src={youtube}
              alt="youtube"
            />
          </a>
          <a
            target="_black"
            style={{
              color: "white",
              border: "2px solid white",
              padding: "10px 20px",
              height: "70px",
              width: "200px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href={`https://open.spotify.com/track/73jbgg5N9axs3jcwDSzmSS?si=4ea879ff2e474c04`}
          >
            <img
              style={{ height: "40px", width: "auto", margin: "0 auto" }}
              src={spotify}
              alt="spotify"
            />
          </a>
          <a
            target="_black"
            style={{
              color: "white",
              border: "2px solid white",
              padding: "10px 20px",
              height: "70px",
              width: "200px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href={`https://music.apple.com/us/album/embrace-all-single/1630992468`}
          >
            <img
              style={{ height: "32px", width: "auto", margin: "0 auto" }}
              src={apple}
              alt="apple"
            />
          </a>
          <a
            target="_black"
            style={{
              color: "white",
              border: "2px solid white",
              padding: "10px 20px",
              height: "70px",
              width: "200px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href={`https://soundcloud.com/zoranaism/purple-drip-embrace-all?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`}
          >
            <img
              style={{ height: "40px", width: "auto", margin: "0 auto" }}
              src={soundcloud}
              alt="soundcloud"
            />
          </a>
        </div>
      </div>
    </HeroBannerContainer>
  );
};

export default BannerPersonalPortfolio;
