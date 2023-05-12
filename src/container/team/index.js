import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle";
import Team from "../../components/team";
import lines from "../../assets/images/singleportoflio/transparentBg1.png";
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";

const PersonalPortfolioTeam = () => {
  const socialIconsPurpleDrip = [
    {
      id: 1,
      media: "soundcloud",
      url: "https://soundcloud.com/zoranaism",
    },
    {
      id: 2,
      media: "spotify",
      url: "https://open.spotify.com/artist/329OL9YNbJWJKNry6hwGyi",
    },
    {
      id: 3,
      media: "youtube",
      url: "https://www.youtube.com/c/zoranaism",
    },
    {
      id: 4,
      media: "apple",
      url: "https://music.apple.com/nl/artist/purple-drip/1630976044",
    },
  ];

  const TOSPreSave = [
    {
      id: 1,
      media: "link",
      url: "https://linktr.ee/zoranaism",
    },
  ];

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
              <SectionTitle title={"About Purple Drip"} />

              <p className="mb-40">
                In a serendipitous event songwriter Zorana and music producer
                Milan found each other. While working on the song Zorana shared
                a snippet on social media. Milan was instantly enamored with the
                promise of this new musical world and they reconnected.
                Especially when Zorana’s effort in production didn’t result in
                the best possible version, it was Milan’s expertise that gives
                the final version its ethereal quality.
              </p>
            </Col>
          </Row>
          <Row className={"align-items-center"}>
            <Col lg={4}></Col>

            <Col lg={4} style={{ marginBottom: "20px" }}>
              <Thumbnail
                classes={"about-thumbnail"}
                thumb={`team/Milan&Zorana.jpg`}
              />
            </Col>

            {/* <Col lg={6}>
              <Content classes={"about-content"}>
              <h3 className="block-title">asd</h3>
              
              <p>sdfas</p>
              </Content>
            </Col> */}
          </Row>

          <Row className={"align-items-center"}>
            <Col lg={2}></Col>
            <Col lg={4}>
              <Thumbnail
                classes={"about-thumbnail"}
                thumb={`team/PurpleDripLogo.png`}
              />
              {socialIconsPurpleDrip.map((social) => (
                <a
                  key={social?.id}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "10px" }}
                >
                  <i className={`fa fa-${social?.media}`} />
                </a>
              ))}
            </Col>
            <Col lg={4}>
              <Thumbnail classes={"about-thumbnail"} thumb={`team/TOS.png`} />
              {TOSPreSave.map((social) => (
                <a
                  key={social?.id}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "10px" }}
                >
                  <i className={`fa fa-${social?.media}`} />
                </a>
              ))}
            </Col>

            {/* <Col lg={6}>
              <Content classes={"about-content"}>
              <h3 className="block-title">asd</h3>
              
              <p>sdfas</p>
              </Content>
            </Col> */}
          </Row>

          {/* <Row className={"align-items-center"}>
            <Col lg={4} style={{ marginBottom: "20px" }}>
              <Thumbnail
                classes={"about-thumbnail"}
                thumb={`team/zorana.jpg`}
              />

              {socialIconsZ.map((social) => (
                <a
                  key={social?.id}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "10px" }}
                >
                  <i className={`fa fa-${social?.media}`} />
                </a>
              ))}
            </Col>

            <Col lg={8}>
              <Content classes={"about-content"}>
                <h3 className="block-title">Zorana</h3>

                <p>
                  Zorana is a music producer, music director, artist, and
                  founder of Stellar Sound Foundation based in The Netherlands.
                  After Zorana has enjoyed 15 years of music education, she was
                  a part of many choirs, worked as a music teacher abroad,
                  performed in luxurious venues as a pianist, and now she is an
                  independent artist that is focusing on creating covers and
                  original work. Zorana dares to experiment with any style,
                  combining unusual elements and composing techniques. Among her
                  works, you will find orchestral pieces, piano and vocal covers
                  in diverse styles. Her focus is on the DIY approach where she
                  is trying to create everything on her own and stand out by
                  avoiding standards in the industry. As project director, she
                  created big productions with a very little budget which
                  required all her drive and problem-solving skills to bring to
                  completion. Recently she also founded the non-government
                  organization ‘Stellar Sound Foundation’ to educate, encourage,
                  promote, and connect musicians locally and internationally.
                  Zorana is enthusiastic, bubbly, visionary, focused, creative,
                  and stubborn, and she way too often changes her hair color,
                  you wouldn't easily recognize her.
                </p>
              </Content>
            </Col>
          </Row> */}
          {/* <Row style={{ marginTop: "40px" }} className={"align-items-center"}>
            <Col lg={4} style={{ marginBottom: "20px" }}>
              <Thumbnail classes={"about-thumbnail"} thumb={`team/Milan.png`} />
              {socialIconsM.map((social) => (
                <a
                  key={social?.id}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "10px" }}
                >
                  <i className={`fa fa-${social?.media}`} />
                </a>
              ))}
            </Col>
            <Col lg={8}>
              <Content classes={"about-content"}>
                <h3 className="block-title">Milan</h3>

                <p>
                  Milan is a music producer, audio and sound recording engineer
                  based in Serbia. Without formal education, he started with
                  music at an early age when toy instruments were his favorite
                  to play with. Later on, he moved to the digital space using E
                  Jay. Later he switched to Fruity Loops where he still produces
                  his music today. From the moment he recognized his passion he
                  started experimenting for hours. As a self-thought engineer he
                  today has 20 years of experience in the music production
                  industry. He is proud of himself for keeping his love for
                  music intact while accomplishing a strong career. Thanks to
                  his strong will and vision he received proposals for a great
                  diversity of roles and projects: sound recording engineer
                  (both outdoor and indoor), sound designer, composer, mixing
                  and mastering for the projects like documentaries, ads, bands,
                  and games. There’s always a new challenge that he is looking
                  forward to tackling with enthusiasm and curiosity.
                </p>
              </Content>
            </Col>
          </Row> */}
        </Container>
      </div>
    </div>
  );
};

export default PersonalPortfolioTeam;
