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
                            <p>{aboutData.bio}</p>
                        </Content>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;