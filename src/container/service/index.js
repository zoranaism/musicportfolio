import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import serviceBg from '../../assets/images/bg/service-bg.png';
import SectionTitle from "../../components/SectionTitle";
import Service from "../../components/service";
import services from '../../data/service'

const PersonalPortfolioService = () => {
    return (
        <div className="bg-grey section service-bg" style={{backgroundImage: `url(${serviceBg})`}}>
            <div className="section-wrap section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                <Container>
                    <Row>
                        <Col>
                            <SectionTitle
                                title={"My Services"}
                                content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam."}
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