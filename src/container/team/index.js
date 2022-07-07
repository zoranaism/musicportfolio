import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle";
import Team from "../../components/team";

const PersonalPortfolioTeam = () => {
  return (
    <div className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
      <div className="section-wrap section">
        <Container>
          <Row>
            <Col>
              <SectionTitle title={"About Purple Drip"} />
            </Col>
            <p className="mb-40">
              In a serendipitous event songwriter Zorana and music producer
              Milan found each other. While working on the song Zorana shared a
              snippet on social media. Milan was instantly enamored with the
              promise of this new musical world and they reconnected. Especially
              when Zorana’s effort in production didn’t result in the best
              possible version, it was Milan’s expertise that gives the final
              version its ethereal quality.
            </p>
          </Row>

          <Row md={12} lg={6} className={"mbn-30"}>
            <Col md={6} lg={6} className={"mb-30"}>
              <Team
                name="Zorana"
                designation="composer"
                profilePhoto={"Zorana.png"}
                socials={[
                  {
                    id: 1,
                    media: "facebook",
                    username: "hasthemes",
                  },
                  {
                    id: 2,
                    media: "twitter",
                    username: "hasthemes",
                  },
                  {
                    id: 3,
                    media: "dribbble",
                    username: "hastech",
                  },
                ]}
              />
            </Col>
            <Col md={6} lg={6} className={"mb-30"}>
              <Team
                name="Milan"
                designation="music producer"
                profilePhoto={"Milan.png"}
                socials={[
                  {
                    id: 1,
                    media: "facebook",
                    username: "hasthemes",
                  },
                  {
                    id: 2,
                    media: "twitter",
                    username: "hasthemes",
                  },
                  {
                    id: 3,
                    media: "dribbble",
                    username: "hastech",
                  },
                ]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PersonalPortfolioTeam;
