import React, {useContext, useState, useEffect} from 'react';
import {NAV_BAR} from "../constants";
import './style.css';
import logo from '../assets/image2.svg';
import {
    Menu,
    Container,
    Image,
    Sticky,
    Item,
    Button
} from "semantic-ui-react";
import {
    GB_FLAG_LINK,
    RU_FLAG_LINK
} from '../constants';
import LangContext from '../context/LangContext';

const MobileMenu = () => {
    const [menu, toggleMenu] = useState(false)

    const hamburgerClass = menu ? 'open' : '';
    return ( <div className='mobile-nav-bar mobile-view'>
                <div className="menu-icon-wrapper float-left" onClick={()=> toggleMenu(!menu)}>
                    <div id="hamburger" className={hamburgerClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                </div>
        </div>
)
}

export default MobileMenu;
