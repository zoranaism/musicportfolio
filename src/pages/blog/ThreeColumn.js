import React from 'react';

// File imported
import SideHeader from "../../components/SideHeader";
import Header from "../../components/header/HeaderOne";
import FooterThree from "../../components/footer/FooterThree";
import TemplateBlogWithoutSidebar from "../../templates/blog/BlogWithoutSidebar";

const BlogThreeColumnPage = () => {
    return (
        <div className={'main-wrapper'}>
            <Header/>
            <SideHeader mobile={true}/>
            <TemplateBlogWithoutSidebar blogColumnClass={'col-12 col-lg-4 col-md-6'} />
            <FooterThree position={'fixed'} />
        </div>
    );
};

export default BlogThreeColumnPage;
