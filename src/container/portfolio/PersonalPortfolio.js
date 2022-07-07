import React from "react";
import portfolios from "../../data/portfolios";
import Portfolio from "../../components/portfolio";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle";

const PersonalPortfolio = () => {
  return (
    <div className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
      <Container>
        <Row>
          <Col>
            <SectionTitle
              title={"Promote us"}
              content={
                "RELEASE DATE: 31th JULY, 2022"
              }
            />
          </Col>
        </Row>

        <Row className={"portfolio-column-four mbn-30"}>
          <Col lg={4} md={6} className={"mb-30"}>
            <Portfolio
              variant={"column"}
              slug={"slug"}
              title={"email"}
              thumb={"mail.png"}
              category={"ask us anything"}
            />
          </Col>
          <Col  lg={4} md={6} className={"mb-30"}>
            <Portfolio
              variant={"column"}
              slug={"slug"}
              title={"visuals"}
              thumb={"visuals.png"}
              category={"get all visuals"}
            />
          </Col>
          <Col  lg={4} md={6} className={"mb-30"}>
            <Portfolio
              variant={"column"}
              slug={"slug"}
              title={"links"}
              thumb={"links.png"}
              category={"get all links"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonalPortfolio;
