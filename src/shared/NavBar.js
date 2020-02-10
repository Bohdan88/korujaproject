import React from 'react';
import {NAV_BAR} from "../constants";
import {Menu, Container, Sticky} from "semantic-ui-react";
import './style.css';
import logo from '../assets/image2.svg';

const NavBar = () => {
    return (
        <div>
            <Container fluid>
                <Sticky>
                    <Menu
                        className="nav-bar-menu"
                        borderless>
                        <Menu.Menu position="left">
                            <Menu.Item
                                as={'a'}
                                href="/"
                                className="logo-container"
                            >
                                <img src={logo}/>
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
                </Sticky>
            </Container>
        </div>
    );
};

export default NavBar;
