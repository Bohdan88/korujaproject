import React, {useContext, useState, useEffect} from 'react';
import {NAV_BAR} from "../constants";
import './style.css';
import logo from '../assets/image2.svg';
import {
    Menu,
    Container,
    Image,
    Sticky,
    Item
} from "semantic-ui-react";
import {
    GB_FLAG_LINK,
    RU_FLAG_LINK
} from '../constants';
import LangContext from '../context/LangContext';
import MobileMenu from './MobileNavBar';

const NavBar = () => {
    const [flag, switchFlag] = useState(true);
    const {switchLang, lang} = useContext(LangContext);
    //
    const currentFlag = flag ? GB_FLAG_LINK : RU_FLAG_LINK;
    const currentLanguage = flag ? 'en-US' : 'ru-RU';

    return (
        <div>
            <Sticky
                className='nav-bar-sticky'
            >
                <Container
                    className='mobile-nav-bar-container'
                    fluid>
                    <Menu
                        className="nav-bar-menu"
                        borderless>

                        <MobileMenu/>

                        <Menu.Menu position="left">
                            <Menu.Item
                                as={'a'}
                                href="/"
                                className="logo-container"
                            >
                                <Image src={logo}/>
                                <span className="logo-name">KRJ</span>
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position={"right"}>
                            {NAV_BAR.map((item, key) => {
                                return <Menu.Item
                                    key={key}
                                    as='a'
                                    href={item.path}
                                    className="nav-bar-menu-items"
                                >
                                        {item.name[flag ? 0 : 1]}
                                    {/*{item.name[currentLanguage.slice(0,2)]}*/}
                                </Menu.Item>

                            })}
                            <Menu.Item>
                                <Item.Image
                                    as='button'
                                    className='nav-bar-language'
                                    src={currentFlag}
                                    onClick={() => {
                                        switchFlag(!flag)
                                        switchLang(currentLanguage)
                                    }}
                                />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Sticky>

        </div>
    );
};

export default NavBar;
