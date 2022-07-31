import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";
import aboutData from "../../data/about-me";

const AboutMe = ({ type }) => {
  return (
    <div className={type !== "page" ? "section-padding section" : null}>
      <Container>
        <Row className={"align-items-center"}>
          <Col lg={6}>
            <Thumbnail
              classes={"about-thumbnail mb-md-30 mb-sm-30 mb-xs-30"}
              thumb={`singleportoflio/${aboutData.thumb}`}
            />
          </Col>

          <Col lg={6}>
            <Content classes={"about-content"}>
              {type !== "page" ? (
                <h3 className="block-title">RELEASE INFO</h3>
              ) : null}
              {/* <p>{aboutData.bio}</p> */}
              <ul className="personal-info">
                <li>
                  <span>Song:</span>Embrace all
                </li>
                <li>
                  <span>Artist:</span>Purple Drip
                </li>
                <li>
                  <span>Release Date:</span>31st July 2022
                </li>
                <li>
                  <span>Genre:</span>Hybrid between downtempo, chillwave, indie,
                  electronica, prog rock and post rock
                </li>
                <li>
                  <span>ISRC:</span>QZK6L2294240
                </li>
                <li>
                  <span>UPC:</span>197045875653
                </li>
                <li>
                  <span>Location:</span>Netherlands
                </li>
                <li>
                  <span>Band members:</span>Zorana and Milan
                </li>
                <li>
                  <span>Song and Lyrics:</span>Zorana
                </li>
                <li>
                  <span>Main mixing engeneer:</span>Milan
                </li>
                <li>
                  <span>Mixing assistant:</span>Zorana
                </li>
                <li>
                  <span>Master:</span>Milan
                </li>
                <li>
                  <span>Animation:</span>Cris
                </li>
                <li>
                  <span>Photography:</span>Zorana and Stephie
                </li>
                <li>
                  <span>PR, branding and marketing:</span>Zorana
                </li>
               
              </ul>

              {/* <h3 className="block-title">Skill</h3>

                            <div className="skill-wrap">
                                {aboutData.skills.map(skill => (
                                    <Skill
                                        key={skill.id}
                                        title={skill.title}
                                        percentage={skill.percentage}
                                    />
                                ))}
                            </div> */}
            </Content>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
