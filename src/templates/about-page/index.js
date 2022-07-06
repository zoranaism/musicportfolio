import React from 'react';
import PageContainer from "../../container/CustomPage";

import AboutMe from "../../container/AboutMe";

const ContentAboutPage = () => {
    return (
        <PageContainer classes={'bg-grey'}>
           <AboutMe type={'page'}/>
        </PageContainer>
    );
};

export default ContentAboutPage;