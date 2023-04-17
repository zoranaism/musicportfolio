import React from "react";
import portfolios from "../../data/portfolios";
import Portfolio from "../../components/portfolio";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle";

const MyPortfolioContainer = () => {
  return (
    <div className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
      <Container>
        <Row>
          <Col>
            <SectionTitle
              title={"My Worx"}
              content={
                "Diverse genre like: classical, cinematic, electronic, pop, prog, piano"
              }
            />
          </Col>
        </Row>

        <Row className={"portfolio-column-four mbn-30"}>
          {portfolios.slice(0, 9).map((portfolio) => (
            <Col key={portfolio.id} lg={4} md={6} className={"mb-30"}>
              <Portfolio
                id={portfolio.id}
                variant={"column"}
                slug={portfolio.slug}
                title={portfolio.title}
                thumb={portfolio.thumb}
                category={portfolio.category}
                link={portfolio.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyPortfolioContainer;
