import React from 'react';

// File imported
import Contact from "../../container/contact";
import Header from "../../components/header/HeaderOne";
import Footer from "../../components/footer/FooterThree";
import PersonalPortfolioTeam from "../../container/team";
import PersonalPortfolioService from "../../container/service";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";
import AboutMe from "../../container/AboutMe"
import portfolioData from '../../data/portfolios';
import PortfolioMasonryThreeColumn from "../../templates/portfolio/masonry/three-column";


const HomePersonalPortfolio = () => {
    const portfolios = portfolioData.slice(0, '15');

    return (
        <div className={'main-wrapper p-0'}>
            <Header classes={'position-static'}/>
            <BannerPersonalPortfolio/>
            <AboutMe />
            <PortfolioMasonryThreeColumn portfolios={portfolios} loading={false} fullWidth={true}/>
            <PersonalPortfolioService/>
            <PersonalPortfolioTeam/>
            <Contact/>
            <Footer position={'static'}/>
        </div>
    );
};

export default HomePersonalPortfolio;
