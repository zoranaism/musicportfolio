import React from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import ContentAboutPage from "../../templates/about-page";
import FooterThree from "../../components/footer/FooterThree";

const AboutPage = () => {
    return (
        <div className={`main-wrapper`}>
            <Header/>
            <SideHeader mobile={true}/>
            <ContentAboutPage/>
            <FooterThree position={'fixed'}/>
        </div>
    );
};

export default AboutPage;