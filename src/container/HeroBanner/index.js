import React from "react";
import { Container } from "react-bootstrap";
import sorrowVideoBG from "../../assets/images/hero/sorrow-video.mov";

const HeroBannerContainer = ({ children, overlay, bg }) => {
  return (
    <div
      className={`section main-slider-1 ${overlay ? "banner-overlay" : null}`}
      // style={{ backgroundImage: `url(${bg})` }}
      style={{ position: "relative", width: "100%" }}
    >
      <video
        style={{
          position: "absolute",
          bottom: 0,
          height: "100%",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src={sorrowVideoBG} type="video/mp4" />
      </video>

      <Container>
        <div
          style={{
            position: "relative",
            zIndexL: 10,
          }}
        >
          {children}
        </div>
      </Container>
    </div>
  );
};

export default HeroBannerContainer;
