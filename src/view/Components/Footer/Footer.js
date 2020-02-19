import React, {useContext, useState} from 'react';
import logo from "../../../assets/image2.svg";
import './style.scss';
import {
    Grid,
    Image,
    Container,
    Menu,
    Header,
    Item,
    Icon
} from 'semantic-ui-react';
import LangContext from '../../../context/LangContext';
import {
    GB_FLAG_LINK,
    RU_FLAG_LINK,
    CLOUD_NAME,
    PUBLIC_ID_INSTAGRAM_ICON,
    EMAIL_NAME,
    NETWORKS_NUMBER,
    ADDITIONAL_NUMBER,
    LOGO_NAME
} from '../../../constants';
import {Image as CloudImage} from 'cloudinary-react';
import routes from '../../../routes';


const Footer = () => {
    const {footer, app} = useContext(LangContext).currentLangData;
    const {switchLang} = useContext(LangContext);
    const navIndex = app.language === 'ru' ? 0 : 1;
    const currentYear = new Date().getFullYear()
    const [flag, switchFlag] = useState(true);
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
                        <span className="footer-logo-name logo-name">{LOGO_NAME}</span>
                    </Container>
                    <Container
                        className="footer-container-desc"
                    >   2004-{currentYear} <br/>
                        {footer.company}
                        <br/>
                        <CloudImage
                            cloudName={CLOUD_NAME}
                            className="icon-instagram-default icon-footer-instagram"
                            publicId={PUBLIC_ID_INSTAGRAM_ICON}
                        />
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
                            {routes.map((item, key) => {
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
                                        switchFlag(!flag);
                                        switchLang(currentLanguage)
                                    }}
                                />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
                <Grid.Column
                    tablet={6}
                    widescreen={5}
                    largescreen={6}
                    computer={5}
                    mobile={16}
                >
                    <Header
                        textAlign='center'
                        className='footer-contacts-header'
                        as='h4'>
                        {footer.info}
                    </Header>
                    <Container className='footer-contacts-info'>
                        <div className='footer-mobile-phones'>
                            <Icon
                                color={'brown'}
                                name="phone"/>
                            <p>
                                {NETWORKS_NUMBER}<br/>
                                {ADDITIONAL_NUMBER}
                            </p>
                        </div>
                        <p className='footer-network-info'>
                            <b> <Icon
                                color={'grey'}
                                name="mail"/>
                            </b> {EMAIL_NAME} <br/>
                            <b> <Icon
                                size={"large"}
                                color={'blue'}
                                name="telegram"/>
                                <Icon
                                    size={"large"}
                                    color={'violet'}
                                    name="viber"/> </b>
                            {NETWORKS_NUMBER}
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
