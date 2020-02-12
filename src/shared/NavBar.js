import React from 'react';
import {NAV_BAR} from "../constants";
import './style.css';
import logo from '../assets/image2.svg';
import {
    Menu,
    Container,
    Image,
    Sticky
} from "semantic-ui-react";

const NavBar = () => {
    return (
        <div>
            <Sticky
                className='nav-bar-sticky'
                // offset={0}
                // onUnstick={(props)=> console.log(props, 'props')}
            >
                <Container
                    // className='nav-bar-container'
                    fluid>
                    <Menu
                        // fixed='top'
                        // attached='top'
                        className="nav-bar-menu"
                        borderless>
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
                                    {item.name}
                                </Menu.Item>

                            })}
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Sticky>

        </div>
    );
};

export default NavBar;
