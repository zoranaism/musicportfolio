import React from 'react';

// File imported
import Contact from "../../container/contact";
import SideHeader from "../../components/SideHeader";
import Header from "../../components/header/HeaderOne";
import Footer from "../../components/footer/FooterThree";
import PersonalPortfolioTeam from "../../container/team";
import PersonalPortfolioService from "../../container/service";
import PersonalPortfolio from "../../container/portfolio/PersonalPortfolio";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";

const HomePersonalPortfolio = () => {
    return (
        <div className={'main-wrapper p-0'}>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <BannerPersonalPortfolio/>
            <PersonalPortfolio/>
            <PersonalPortfolioService/>
            <PersonalPortfolioTeam/>
            <Contact/>
            <Footer position={'static'}/>
        </div>
    );
};

export default HomePersonalPortfolio;
