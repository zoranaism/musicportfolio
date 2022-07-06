import React from 'react';
import Logo from "../../logo";
import NavBar from "../../navbar";
import HeaderSocial from "../../HeaderSocial";
import HeaderContainer from "../../../container/header";

const Header = ({classes}) => {
    return (
        <HeaderContainer classes={classes ? classes : null}>
            <Logo/>

            <NavBar/>

            <HeaderSocial/>
        </HeaderContainer>
    );
};

export default Header;
