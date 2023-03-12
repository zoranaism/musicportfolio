import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/bg/service-bg.png";
import SectionTitle from "../../components/SectionTitle";
import Service from "../../components/service";
import hats from "../../data/hats";
import lines from "../../assets/images/singleportoflio/transparentBg1.png";

const MyHats = () => {
  return (
    <div
      className="bg-grey section service-bg"
      style={{ backgroundImage: `url(${lines})` }}
    >
      <div className="section-wrap section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
        <Container>
          <Row>
            <Col>
              <SectionTitle
                title={"HATS I WEAR"}
                content={
                  "You might have read that I stubbornly do everything on my own. When I wrote that, I meant it."
                }
              />
            </Col>
          </Row>

          <Row>
            {hats.map((service) => (
              <Col key={service.id} md={6} className={"mb-40 mb-xs-30"}>
                <Service title={service.title} content={service.content} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyHats;
