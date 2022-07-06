import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Form from "../../components/form";
import QuickContact from "../../components/QuickContact";
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

                                <Col lg={10}>
                                    <QuickContact
                                        phone={'+012456879'}
                                        email={'hello@example.com'}
                                        location={'2020 Willshire Glen, Alpharetta, GA-30009'}
                                    />
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6}>
                            <Map
                                text={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour lebmid'}
                                lat={40.6971494}
                                long={-74.2598661}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;