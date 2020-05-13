import React, {useContext, useState} from 'react';
import './style.scss';
import logo from '../../../assets/image2.svg';
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
} from '../../../constants';
import LangContext from '../../../context/LangContext';
import MobileMenu from './MobileNavBar';
import routes from "../../../routes";

const NavBar = () => {
    const [flag, switchFlag] = useState(true);
    const {switchLang} = useContext(LangContext);
    //
    const currentFlag = flag ? GB_FLAG_LINK : RU_FLAG_LINK;
    const currentLanguage = flag ? 'en-US' : 'ru-RU';

    return (
        <div>
            <Sticky className='nav-bar-sticky'>
                <Container
                    className='mobile-nav-bar-container'
                    fluid>
                    <Menu
                        className="nav-bar-menu"
                        borderless>
                        <MobileMenu/>
                        <Menu.Menu
                        className='logo-menu-item'
                        >
                            <Menu.Item
                                as={'a'}
                                href="/#home" 
                                className="logo-container"
                            >
                                <Image src={logo}/>
                                <span className="logo-name">KRJ</span>
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position={"right"}>
                            {routes.map((item, key) => {
                                return <Menu.Item
                                    key={key}
                                    as='a'
                                    href={item.path}
                                    className="nav-bar-menu-items"
                                >
                                    {item.name[flag ? 0 : 1]}
                                </Menu.Item>

                            })}
                            <Menu.Item>
                                <Item.Image
                                    as='button'
                                    className='nav-bar-language'
                                    src={currentFlag}
                                    onClick={() => {
                                        switchFlag(!flag);
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
