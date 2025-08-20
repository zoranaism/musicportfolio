import React from 'react';
import {NavLink} from "react-router-dom";
import navbarData from '../../data/navbar'

const NavItem = () => {
    return (
        navbarData.map(navItem => (
            <li key={navItem.id} className={navItem.subMenu ? 'menu-item-has-children' : null}>
                <NavLink
                    exact={navItem.link === `/`}
                    to={`${process.env.PUBLIC_URL + navItem.link}`}
                    activeClassName={'active'}>
                    {navItem.title}
                </NavLink>

                {navItem.subMenu ? (
                    <ul className="sub-menu">
                        {navItem.subMenu.map(subItem => (
                            <li key={subItem.id}
                                className={subItem.subMenu ? "menu-item-has-children" : null}>
                                <NavLink to={`${process.env.PUBLIC_URL + subItem.link}`}>{subItem.title}</NavLink>

                                {subItem.subMenu ? (
                                    <ul className="sub-menu">
                                        {subItem.subMenu.map(dropSubItem => (
                                            <li key={dropSubItem.id}>
                                                <NavLink to={`${process.env.PUBLIC_URL + dropSubItem.link}`}>
                                                    {dropSubItem.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                ) : null}
            </li>
        ))
    );
};

export default NavItem;
