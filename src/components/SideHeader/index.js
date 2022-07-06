import React, {Fragment, useEffect} from 'react';
import Scrollbar from 'perfect-scrollbar-react';
import 'perfect-scrollbar-react/dist/style.min.css';
import Logo from "../logo";
import NavItem from "../navbar/NavItem";
import socialicons from '../../data/social-networks'

const SideHeader = ({mobile}) => {

    const closeSideMenu = () => {
        const sideMenuWrap = document.querySelector(".side-header");
        const overlay = document.querySelector('.side-menu-overlay');
        sideMenuWrap.classList.remove('side-menu-open');
        overlay.classList.remove('overlay-show');
    };

    const isMobile = window.innerWidth < 992;

    useEffect(() => {
        const responsiveMenu = () => {
            const navWrapper = document.querySelector('.side-menu');
            const navSubMenus = navWrapper.querySelectorAll('.sub-menu');
            const hasSubMenuAnchors = navWrapper.querySelectorAll('.menu-item-has-children > a');

            navSubMenus.forEach((navSubMenu, index) => {
                navSubMenu.style.visibility = 'hidden';
                navSubMenu.style.opacity = 0;
                navSubMenu.style.height = 0;
            });

            hasSubMenuAnchors.forEach((hasSubMenuAnchor, index) => {
                let expandIcon = "<i class='expand menu-expand fa fa-angle-down'/>";
                hasSubMenuAnchor.innerHTML += expandIcon;

                hasSubMenuAnchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    let subMenu = e.target.nextSibling;

                    if (subMenu.style.visibility === 'hidden') {
                        expandIcon = "<i class='expand menu-expand fa fa-angle-up'/>";
                        hasSubMenuAnchor.innerHTML += expandIcon;
                        subMenu.style.visibility = 'visible';
                        subMenu.style.opacity = 1;
                        subMenu.style.height = 'auto';
                        subMenu.style.marginTop = '15px';
                    } else {
                        expandIcon = "<i class='expand menu-expand fa fa-angle-down'/>";
                        hasSubMenuAnchor.innerHTML += expandIcon;
                        subMenu.style.visibility = 'hidden';
                        subMenu.style.opacity = 0;
                        subMenu.style.height = 0;
                        subMenu.style.marginTop = 0
                    }
                });
            });
        };
        responsiveMenu();
    }, []);

    return (
        <Fragment>
            <div className="side-menu-overlay" onClick={() => closeSideMenu()}/>
            <div className={`side-header ${mobile ? 'mobile-side-header' : null}`}>
                <div style={{display: 'flex', maxHeight: '100vh'}}>
                    <Scrollbar options={{suppressScrollX: true}} enable={!isMobile}>
                        <div className="side-header-inner">
                            <button className="side-header-close d-block d-lg-none"
                                    onClick={() => {
                                        closeSideMenu()
                                    }}>
                                <span/>
                            </button>
                            <div className="side-header-logo pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50">
                                <Logo sideHeader={true}/>
                            </div>

                            <div className="side-header-menu">
                                <nav id="side-menu">
                                    <ul className="side-menu">
                                        <NavItem/>
                                    </ul>
                                </nav>
                            </div>

                            <div className="side-header-footer pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                                <div className="side-header-contact-info">
                                    <p><a href="/">+012 345 6789</a></p>
                                    <p><a href="/">info@example.com</a></p>
                                </div>

                                <div className="side-header-social">
                                    {socialicons.map(icon => (
                                        <a key={icon.id} href={`https://${icon.media}.com/${icon.username}`}>
                                            <i className={`fa fa-${icon.media}`}/>
                                        </a>
                                    ))}
                                </div>

                                <div className="side-header-copyright">
                                    <p>&copy; {new Date().getFullYear()} MINIMAU. ALL RIGHT RESERVED</p>
                                </div>
                            </div>
                        </div>
                    </Scrollbar>
                </div>
            </div>
        </Fragment>
    );
};

export default SideHeader;
