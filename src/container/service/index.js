import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SectionTitle from "../../components/SectionTitle";
import Service from "../../components/service";
import services from '../../data/service'

const PersonalPortfolioService = () => {
    return (
        <div className="bg-grey section service-bg" >
            <div className="section-wrap section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                <Container>
                    <Row>
                        <Col>
                            <SectionTitle
                                title={"Let’s Work Together"}
                                content={"Whether you need live music, professional production, or personalized lessons, I’ll help turn your vision into reality through creativity and collaboration."}
                            />
                        </Col>
                    </Row>

                    <Row>
                        {services.map(service => (
                            <Col key={service.id} md={6} className={'mb-40 mb-xs-30'}>
                                <Service
                                    title={service.title}
                                    content={service.content}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PersonalPortfolioService;