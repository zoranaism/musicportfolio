import React from 'react';
import PropTypes from "prop-types";
import PortfolioDetailsThumb from "./thumbnail";
import PortfolioDetailsContent from "./content";
import {Container, Row, Col} from 'react-bootstrap';
import PageContainer from "../../../container/CustomPage";

const TemplatePortfolioDetails = ({portfolio}) => {
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row>
                    <Col lg={7}>
                        <PortfolioDetailsThumb images={portfolio?.previewImages}/>
                    </Col>

                    <Col lg={5}>
                        <PortfolioDetailsContent
                            slug={portfolio.slug}
                            meta={portfolio?.meta}
                            title={portfolio?.title}
                            category={portfolio?.category}
                            description={portfolio?.description}
                        />
                    </Col>
                </Row>
            </Container>
        </PageContainer>
    );
};

TemplatePortfolioDetails.propTypes = {
    portfolio: PropTypes.object.isRequired,
};

export default TemplatePortfolioDetails;