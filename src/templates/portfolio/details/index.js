import React from 'react';
import PropTypes from "prop-types";
import PortfolioDetailsThumb from "./thumbnail";
import PortfolioDetailsYoutube from "./youtube";
import PortfolioDetailsContent from "./content";
import {Container, Row, Col} from 'react-bootstrap';
import PageContainer from "../../../container/CustomPage";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const TemplatePortfolioDetails = ({portfolio}) => {
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row>
                    <Col>
                        <Link to={`${process.env.PUBLIC_URL + '/'}`}className="my-3">
                            <i className="fa fa-arrow-left mr-2"/> BACK
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7}>
                        <PortfolioDetailsYoutube links={portfolio?.previewYouTube}/>
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
                <Row>
                    <Col>
                        <Link to={`${process.env.PUBLIC_URL + '/'}`}className="my-3">
                            <i className="fa fa-arrow-left mr-2"/> BACK
                        </Link>
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