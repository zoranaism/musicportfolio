import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SectionTitle from "../../components/SectionTitle";
import Team from "../../components/team";
import teams from '../../data/team'
// import testimonials from '../../data/testimonial'

const PersonalPortfolioTeam = () => {
    return (
        <div className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
            <div className="section-wrap section">
                <Container>
                    <Row>
                        <Col>
                            <SectionTitle
                                title={'Testimonials'}
                                content={'Here’s what some of my students have to say about their experience working with me.'}
                            />
                        </Col>
                    </Row>

                    <Row className={'mbn-30'}>
                        {teams.slice(0, 3).map(member => (
                            <Col key={member.id} md={6} lg={4} className={'mb-30'}>
                                <Team
                                    name={member.name}
                                    designation={member.designation}
                                    profilePhoto={member.profilePhoto}
                                    socials={member.socials}
                                    testimonial={member.testimonial}

                                />
                            </Col>
                        ))}
                         {/* {testimonials.slice(0, 3).map(member => (
                            <Col key={member.id} md={6} lg={4} className={'mb-30'}>
                                <Team
                                    name={member.name}
                                    designation={member.designation}
                                    profilePhoto={member.profilePhoto}
                                    socials={member.socials}
                                    testimonial={member.testimonial}

                                />
                            </Col>
                        ))} */}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PersonalPortfolioTeam;