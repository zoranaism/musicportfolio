import React, {Fragment, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import Portfolio from "../../../components/portfolio";
import Loading from "../../../components/loading";
import SectionTitle from "../../../components/SectionTitle";

const PortfolioMasonryThreeColumn = ({portfolios, loading, fullWidth}) => {

    useEffect(() => {
        const grid = document.querySelector('.masonry-grid');
        imagesLoaded(grid,()=>{
            new Masonry(grid, {
                itemSelector: '.masonry-grid [class*="col-"]'
            });
        });
    }, [portfolios]);

    return (
        <Fragment>
            <Row>
                <Col style={{marginTop: "80px"}}>
                    <SectionTitle
                        title={"Where Music Took Me"}
                        content={"Partake in my journey across many stages. Each one highlights a unique experience and new level of creativity."}
                    />
                </Col>
            </Row>
                <div className='ml-2'>click to read more</div>
            <Row className={'row-7 portfolio-column-three masonry-grid mb-1'}>
                {portfolios.map(portfolio => (
                    <Col key={portfolio.id} md={6} lg={4} className={'mb-15'}>
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
            {loading ? <Loading/> : null}
        </Fragment>
    );
};

export default PortfolioMasonryThreeColumn;