import React from "react";

// File imported
import Contact from "../../container/contact";
// import SideHeader from "../../components/SideHeader";
import Header from "../../components/header/HeaderOne";
import Footer from "../../components/footer/FooterThree";
import Support from "../../container/support";
// import PersonalPortfolioService from "../../container/service";
import MyHats from "../../container/myHats";
import MyPortfolioContainer from "../../container/portfolio/MyPortfolioContainer";
import BannerMyPortfolio from "../../components/HeroBanner/MyPortfolio";
// import ContentAboutPage from "../../templates/about-page";
import AboutMeContainer from "../../container/AboutMeContainer";


const MyPortfolio = () => {
  return (
    <div className={"main-wrapper p-0"}>
      {/* this is the latest page */}
      <Header classes={"position-static"} />
      {/* <SideHeader mobile={true}/> */}
      <BannerMyPortfolio />
      <AboutMeContainer />

      <MyHats />
      <MyPortfolioContainer />
      {/* <PersonalPortfolioService /> */}
      {/* <ContentAboutPage /> */}
      <Support />

      <Contact/>
      <Footer position={"static"} />
    </div>
  );
};

export default MyPortfolio;
