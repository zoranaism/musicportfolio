import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";
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

<p>I am a music artist, pianist, and producer from the Netherlands, with a background that spans classical, jazz, metal, pop, and electronic music. Every opportunity I've had shaped me, adding skills and perspectives that continue to push me forward as a creator.</p>

<p>Through curiosity and courage I seek out new sounds, ideas, and collaborations. Guided by the visions of others I find inspiration. Stepping into their worlds allows me to connect with their creativity and discover fresh directions for my own.</p>

<p>Music has been close to me since childhood. It runs in my family and filled every celebration, gathering, and good time. That deep connection still fuels my passion and drives me to keep exploring what music can become.</p>

<p>Staying open to change is essential. I watch where music is heading, embrace what is new, and treat every project as a chance to take a different approach. Listening closely helps me understand what is needed, and adapting quickly has become second nature. That's why I value openness and flexibility the most. These values allow me to move between genres, collaborate with ease, and bring out the best in every project I join.</p>

                        </Content>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;