import React from 'react';

// File imported
import SideHeader from "../../components/SideHeader";
import Header from '../../components/header/HeaderOne';
import Footer from "../../components/footer/FooterOne";
import PortfolioDefault from "../../container/portfolio/PortfolioDefault";

const HomeDefault = () => {
    const slider = React.useRef(null);

    const SlideNext = () => {
        slider.current.slickNext();
    };

    const SlidePrev = () => {
        slider.current.slickPrev();
    };

    return (
        <div className={'main-wrapper'}>
            <Header/>
            <SideHeader mobile={true}/>
            <PortfolioDefault ref={slider} limit={5}/>
            <Footer prev={SlidePrev} next={SlideNext}/>
        </div>
    );
};

export default HomeDefault;
