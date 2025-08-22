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
                                content={"I can help you turn your vision into reality through creativity and collaboration. No matter if it's live music, professional production, or personalized lessons."}
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
                    <Row>
                        <Col  md={12} className={'mt-40 mb-xs-30'}>
                            <SectionTitle
                                title={"Why Choose Me"}
                                content={""}
                            />
                        </Col>

                        <Col md={6} className={'mb-40 mb-xs-30'}>
                            <Service
                                title="Versatility"
                                content="I move confidently across genres, ensuring your project gets the sound it needs."
                            />
                        </Col>

                        <Col md={6} className={'mb-40 mb-xs-30'}>
                            <Service
                                title="Fresh Ideas"
                                content="Curiosity drives me to explore new sounds and approaches, bringing originality to our collaboration."
                            />
                        </Col>

                        <Col md={6} className={'mb-40 mb-xs-30'}>
                          <Service
                                title="Flexibility"
                                content="I adjust quickly to your requirements, whether you need a creative lead or a supportive partner."
                            />
                        </Col>

                        <Col md={6} className={'mb-40 mb-xs-30'}>
                            <Service
                                title="⁠Professionalism"
                                content="I work with openness and dedication, making the process smooth from start to finish."
                            />
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PersonalPortfolioService;