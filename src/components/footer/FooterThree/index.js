import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const FooterThree = ({position}) => {
    return (
        <div className={`footer-section section position-${position} pt-30 pb-30`}>
            <Container fluid>
                <Row className={'align-items-center'}>
                    <Col className={'footer-copyright text-center'}>
                        <p>&copy; {new Date().getFullYear()} MINIMAU. ALL RIGHT RESERVED</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterThree;
