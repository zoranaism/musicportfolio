import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import portfoliosData from '../../data/portfolios'
import Portfolio from "../../components/portfolio";
import {Container, Row, Col} from 'react-bootstrap'
import React, {useRef, useImperativeHandle, forwardRef} from 'react';


let PortfolioDefault = (props, ref) => {
    const slider = useRef(null);

    useImperativeHandle(ref, () => ({
        slickNext: () => {
            slider.current.slickNext();
        },
        slickPrev: () => {
            slider.current.slickPrev();
        }
    }));

    return (
        <div className="content-body section">
            <div className="section-wrap section">
                <Container fluid>
                    <Row>
                        <Col className={'p-0'}>
                            <Slider ref={slider} {...carouselSettings}>
                                {portfoliosData.slice(0, props.limit).map(portfolio => (
                                    <div key={portfolio.id} className="col pl-5 pr-5">
                                        <Portfolio
                                            id={portfolio.id}
                                            slug={portfolio.slug}
                                            title={portfolio.title}
                                            category={portfolio.category}
                                            thumb={"long-" + portfolio.thumb}
                                            classes={'portfolio-screen-height'}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

const carouselSettings = {
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                autoplay: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                autoplay: true,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                autoplay: true,
            }
        }
    ]
};

export default forwardRef(PortfolioDefault);
