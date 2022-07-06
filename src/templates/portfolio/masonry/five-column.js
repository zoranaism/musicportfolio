import React, {Fragment, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import PageContainer from "../../../container/CustomPage";
import Portfolio from "../../../components/portfolio";
import Loading from "../../../components/loading";

const PortfolioMasonryFiveColumn = ({portfolios, loading, fullWidth}) => {

    useEffect(() => {
        const grid = document.querySelector('.masonry-grid');
        imagesLoaded(grid, () => {
            new Masonry(grid, {
                itemSelector: '.masonry-grid [class*="col-"]'
            });
        });
    }, [portfolios]);

    return (
        <Fragment>
            <PageContainer classes={'bg-grey'} fullWidth={fullWidth}>
                <Container fluid={!!fullWidth} className={fullWidth ? 'p-0' : null}>
                    <Row className={'row-7 portfolio-column-five masonry-grid'}>
                        {portfolios.map(portfolio => (
                            <Col key={portfolio.id} md={6} lg={4} xl={3} className={'mb-15'}>
                                <Portfolio
                                    id={portfolio.id}
                                    variant={'column'}
                                    slug={portfolio.slug}
                                    title={portfolio.title}
                                    category={portfolio.category}
                                    thumb={"masonry-" + portfolio.thumb}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </PageContainer>

            {loading ? <Loading/> : null}
        </Fragment>
    );
};

export default PortfolioMasonryFiveColumn;