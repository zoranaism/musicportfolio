import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle";
import lines from "../../assets/images/singleportoflio/transparentBg1.png";
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";

const Support = () => {
  const socialIconsZ = [
    {
      id: 1,
      media: "soundcloud",
      url: "https://soundcloud.com/zoranaism",
    },
    {
      id: 2,
      media: "facebook",
      url: "https://facebook.com/zoranaism",
    },
    {
      id: 3,
      media: "twitter",
      url: "https://twitter.com/zoranaism",
    },
    {
      id: 4,
      media: "instagram",
      url: "https://instagram.com/zoranaism",
    },
    {
      id: 5,
      media: "youtube",
      url: "https://www.youtube.com/c/zoranaism",
    },
    {
      id: 6,
      media: "link",
      url: "https://linktr.ee/zoranaism",
    },
    {
      id: 6,
      media: "podcast",
      url: "http://www.stellarsoundpodcast.com",
    },
  ];

  const socialIconsM = [
    {
      id: 1,
      media: "soundcloud",
      url: "https://soundcloud.com/user-884349345/space",
    },
    {
      id: 2,
      media: "facebook",
      url: "https://www.facebook.com/milan.stamenov/",
    },
    {
      id: 3,
      media: "instagram",
      url: "https://www.instagram.com/stamenovmilan86/",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${lines})` }}
      className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50"
    >
      <div className="section-wrap section">
        <Container>
          <Row>
            <Col>
              <SectionTitle title={"Support my work"} />

              <p className="mb-40">
                Help me move from a daily job to full-time music making. What
                are my dream, my goals, and my plans? How I would appreciate
                creative freedom.
              </p>
            </Col>
          </Row>

          <Row className={"align-items-center"}>
            <Col lg={4} style={{ marginBottom: "20px" }}>
              <Thumbnail
                classes={"about-thumbnail"}
                thumb={`support/support.jpg`}
              />

              {/* {socialIconsZ.map((social) => (
                <a
                  key={social?.id}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "10px" }}
                >
                  <i className={`fa fa-${social?.media}`} />
                </a>
              ))} */}
            </Col>

            <Col lg={8}>
              <Content classes={"about-content"}>
                <h3 className="block-title">Support my personal projects</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla, aliquam.
                  https://www.paypal.com/paypalme/zoranaismpiano
                </p>
              </Content>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }} className={"align-items-center"}>
            <Col lg={4} style={{ marginBottom: "20px" }}>
              <Thumbnail classes={"about-thumbnail"} thumb={`support/support.jpg`} />
              {/* {socialIconsM.map((social) => (
                <a
                  key={social?.id}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "10px" }}
                >
                  <i className={`fa fa-${social?.media}`} />
                </a>
              ))} */}
            </Col>
            <Col lg={8}>
              <Content classes={"about-content"}>
                <h3 className="block-title">
                  Donate for Stellar Sound Foundation
                </h3>
                <p>
                  This is my baby and I cherish all the ideals I’ve started this
                  one with. This is actually my Ikigai, a perfect balance of
                  everything I want to do and what I want to do more? You’ve
                  guessed already, music projects 🙂
                  https://www.paypal.com/paypalme/stellarsoundpodcast
                </p>
              </Content>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Support;
