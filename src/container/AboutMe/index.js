import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";
import Skill from "../../components/skill";
import aboutData from '../../data/about-me'

const AboutMe = ({type}) => {
    return (
        <div className={type !== 'page' ? 'section-padding section' : null}>
            <Container>
                <Row className={'align-items-center'}>
                    <Col lg={6}>
                        <Thumbnail classes={'about-thumbnail mb-md-30 mb-sm-30 mb-xs-30'} thumb={`about/${aboutData.thumb}`}/>
                    </Col>

                    <Col lg={6}>
                        <Content classes={'about-content'}>
                            {type !== 'page' ? (<h3 className="block-title">ABOUT ME</h3>) : null}
                            <p>{aboutData.bio}</p>
                            <ul className="personal-info">
                                <li><span>Skype:</span>{aboutData.skype}</li>
                                <li><span>Freelance:</span>{aboutData.availability ? 'Available' : 'Not Available'}</li>
                                <li>
                                    <span>Language:</span>
                                    {aboutData.languages.map((language, index) => (
                                        <p key={index} style={{display: 'inline-block'}}>{`${language},  `}</p>
                                    ))}
                                </li>
                            </ul>

                            <h3 className="block-title">Skill</h3>

                            <div className="skill-wrap">
                                {aboutData.skills.map(skill => (
                                    <Skill
                                        key={skill.id}
                                        title={skill.title}
                                        percentage={skill.percentage}
                                    />
                                ))}
                            </div>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;