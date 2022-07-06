import React from 'react';

// File imported
import SideHeader from "../../components/SideHeader";
import HeaderTwo from "../../components/header/HeaderTwo";
import ContentHomeBlogPage from "../../templates/home-blog";

const HomeBlog = () => {
    return (
        <div className={'main-wrapper has-side-header'}>
            <HeaderTwo/>
            <SideHeader mobile={false}/>
            <ContentHomeBlogPage/>
        </div>
    );
};

export default HomeBlog;
