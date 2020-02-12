import React from 'react';
import logo from "../../../assets/image2.svg";
import './style.scss';
import {NAV_BAR} from "../../../constants";
import {
    Grid,
    Image,
    Container,
    Menu, Header
} from 'semantic-ui-react';

const Footer = () => {
    return (
        <div id="footer">
            <Grid>
                <Grid.Column
                    computer={5}
                    widescreen={5}
                    mobile={3}
                    className='footer-column-logo'
                >
                    <Container

                        className="footer-container-logo"
                    >
                        <Image src={logo}/>
                        <span className="footer-logo-name logo-name">KRJ</span>
                    </Container>
                    <Container
                        className="footer-container-desc"
                    >
                        <p>
                            2004-2020 <br/>
                            Экспортная компания KoRuJa <br/>
                            "Прямая Корея / Прямая Япония "
                        </p>
                    </Container>
                </Grid.Column>
                <Grid.Column
                    computer={5}
                    widescreen={5}
                    className="footer-menu-column">
                    <Menu
                        text
                        vertical
                        className="footer-menu"
                    >
                        <Menu.Menu>
                            {NAV_BAR.map((item, key) => {
                                return <Menu.Item
                                    key={key}
                                    as='a'
                                    href={item.path}
                                    className="footer-menu-items nav-bar-menu-items"
                                >
                                    {item.name}
                                </Menu.Item>

                            })}
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
                <Grid.Column
                    tablet={5}
                    widescreen={5}
                    largescreen={5}
                    // tablet={5}
                    mobile={16}
                >
                    <Header
                        textAlign='center'
                        className='footer-contacts-header'
                        as='h4'>
                        КОНТАКТНАЯ ИНФОРМАЦИЯ
                    </Header>
                    <Container

                        className='footer-contacts-info'
                    >
                        <p>
                            +82-10-387-75702<br/>
                            +82-55-266-8400
                        </p>
                        <p>
                            <b>Эл. почта</b>: krj.shop7@gmail.com <br/>
                            <b>Viber</b>: +82-10-387-75702
                        </p>

                        <p>
                            <b>Главный Офис:</b> 1F, Sinwol-Ro 24,<br/>
                            Uichangu,Changwon City Korea , 51443
                        </p>
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    );

};

export default Footer;
