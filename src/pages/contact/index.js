import React,{Fragment} from 'react';
import Contact from "../../container/contact";
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import FooterThree from "../../components/footer/FooterThree";

const ContactPage = () => {
    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <Contact/>
            <FooterThree position={'static'}/>
        </Fragment>
    );
};

export default ContactPage;