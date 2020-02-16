import React, {useContext, useState} from 'react';
import logo from "../../../assets/image2.svg";
import './style.scss';
import {
    Grid,
    Image,
    Container,
    Menu,
    Header,
    Item
} from 'semantic-ui-react';
import LangContext from '../../../context/LangContext';
import {
    GB_FLAG_LINK,
    RU_FLAG_LINK,
    NAV_BAR
} from '../../../constants';

const Footer = () => {
    const {footer, app} = useContext(LangContext).currentLangData;
    const navIndex = app.language === 'ru' ? 0 : 1;
    const [flag, switchFlag] = useState(true);
    const {switchLang, lang} = useContext(LangContext);
    const currentFlag = flag ? GB_FLAG_LINK : RU_FLAG_LINK;
    const currentLanguage = flag ? 'en-US' : 'ru-RU';
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
                        {footer.company}
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
                                    {item.name[navIndex]}
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
                </Grid.Column>
                <Grid.Column
                    tablet={5}
                    widescreen={5}
                    largescreen={5}
                    computer={5}
                    mobile={16}
                >
                    <Header
                        textAlign='center'
                        className='footer-contacts-header'
                        as='h4'>
                        {footer.info}
                    </Header>
                    <Container

                        className='footer-contacts-info'
                    >
                        <p>
                            +82-10-387-75702<br/>
                            +82-55-266-8400
                        </p>
                        <p>
                            <b>{footer.mail}</b>: krj.shop7@gmail.com <br/>
                            <b>Viber/Telegram</b>: +82-10-387-75702
                        </p>
                        <p>
                            <b>{footer.office}</b> 1F, Sinwol-Ro 24,<br/>
                            Uichangu,Changwon City Korea , 51443
                        </p>
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    );

};

export default Footer;
