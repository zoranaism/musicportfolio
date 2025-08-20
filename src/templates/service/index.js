import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PageContainer from "../../container/CustomPage";
import Service from "../../components/service";
import services from '../../data/service'

const TemplateService = () => {
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row className={'service-bg'}>
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
        </PageContainer>
    );
};

export default TemplateService;