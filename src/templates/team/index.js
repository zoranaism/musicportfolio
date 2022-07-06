import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PageContainer from "../../container/CustomPage";
import Team from "../../components/team";
import Loading from "../../components/loading";

const TemplateTeamPage = ({teams, loading}) => {
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row className={'mbn-30'}>
                    {teams.map(member => (
                        <Col key={member.id} md={6} lg={4} className={'mb-30'}>
                            <Team
                                name={member.name}
                                designation={member.designation}
                                profilePhoto={member.profilePhoto}
                                socials={member.socials}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            {loading ? <Loading/> : null}
        </PageContainer>
    );
};

export default TemplateTeamPage;