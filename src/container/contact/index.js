import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Form from "../../components/form";
import Map from "../../components/map";

const Contact = () => {
    return (
        <div className="bg-grey section ">
            <div
                className="section-wrap section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                <Container>
                    <Row>
                        <Col lg={6} className={'mb-sm-45 mb-xs-45'}>
                            <Row>
                                <Col lg={10} className={'mb-45'}>
                                    <div className="contact-form">
                                        <h3>CONTACT FORM</h3>
                                        <Form/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6}>
                            <Map
                                text={'Have a project in mind, or just want to say hi? I’m always open to new ideas, collaborations, and conversations about music. Drop me a message and I’ll get back to you soon.'}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;




