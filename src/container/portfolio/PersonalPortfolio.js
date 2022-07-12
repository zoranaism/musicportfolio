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
              content={"RELEASE DATE: 31th JULY, 2022"}
            />
          </Col>
        </Row>

        <Row className={"portfolio-column-four mbn-30"}>
          <Col lg={4} md={6} className={"mb-30"}>
            <Portfolio
              variant={"column"}
              link={"mailto:zoranaism@gmail.com"}
              title={"email"}
              thumb={"mail.png"}
              category={"ask us anything, we will reply shortly"}
            />
          </Col>
          <Col lg={4} md={6} className={"mb-30"}>
            <Portfolio
              variant={"column"}
              link={
                "https://drive.google.com/drive/folders/1W94zT0lnOgppp84DGRc507P_0U2VXZSd?usp=sharing"
              }
              title={"visuals"}
              thumb={"visuals.png"}
              category={"get all visuals for your promo"}
            />
          </Col>
          <Col lg={4} md={6} className={"mb-30"}>
            <Portfolio
              variant={"column"}
              link={"https://linktr.ee/zoranaism"}
              title={"links"}
              thumb={"links.png"}
              category={"find all links you need here"}
            />
          </Col>
        </Row>

        <div className={"text-center align-center"} style={{marginTop: "30px"}}>
          <a
            target="_black"
            style={{
              color: "black",
              border: "2px solid black",
              padding: "10px 20px",
              marginBottom: '20px'

            }}
            href={"https://distrokid.com/hyperfollow/purpledrip1/embrace-all"}
          >
            Spotify Pre-Save
          </a>
          <p>
            *Inform us about your promotion by tagging Zorana via social media or
            by sending an email.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PersonalPortfolio;
