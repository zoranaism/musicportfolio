import React from 'react';
import Header from "../../components/header/HeaderOne";
import FooterThree from "../../components/footer/FooterThree";
import TemplateBlogWithSidebar from "../../templates/blog/BlogWithSidebar";
import SideHeader from "../../components/SideHeader";

const BlogTwoColumnLeftSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateBlogWithSidebar
                blogColumnClass={'col-12 col-md-6'}
                sidebarPosition="left"
                showPostsPerPage={6}
            />
            <FooterThree position={'fixed'}/>
        </div>
    );
};

export default BlogTwoColumnLeftSidebarPage;