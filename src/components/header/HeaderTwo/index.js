import React from 'react';
import HeaderContainer from "../../../container/header";
import Logo from "../../logo";

const HeaderTwo = () => {

    const openSideMenu = ()=>{
        const sideMenuWrap = document.querySelector(".side-header");
        const overlay = document.querySelector('.side-menu-overlay');
        sideMenuWrap.classList.add('side-menu-open');
        overlay.classList.add('overlay-show');
    };

    return (
        <HeaderContainer classes={'d-lg-none'}>
            <div className="header-logo mt-40 mb-40 col">
                <Logo sideHeader={true}/>
            </div>

            <div className="header-toggle-btn col">
                <button className="side-header-toggle" onClick={()=> openSideMenu()}><span/></button>
            </div>
        </HeaderContainer>
    );
};

export default HeaderTwo;