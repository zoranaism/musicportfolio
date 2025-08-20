import React,{Fragment} from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateService from "../../templates/service";
import FooterThree from "../../components/footer/FooterThree";

const ContactPage = () => {
    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateService/>
            <FooterThree position={'static'}/>
        </Fragment>
    );
};

export default ContactPage;