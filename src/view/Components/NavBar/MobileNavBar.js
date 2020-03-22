import React, {useContext, useState} from 'react';
import './style.scss';
import { Image, List} from "semantic-ui-react";
import { GB_FLAG_LINK, RU_FLAG_LINK} from '../../../constants';
import LangContext from '../../../context/LangContext';
import routes from '../../../routes';

const MobileMenu = () => {
    const [menu, toggleMenu] = useState(false);
    const [flag, switchFlag] = useState(true);
    const {switchLang} = useContext(LangContext);
    const currentFlag = flag ? GB_FLAG_LINK : RU_FLAG_LINK;
    const currentLanguage = flag ? 'en-US' : 'ru-RU';


    const hamburgerClass = menu ? 'open' : '';
    const menuClass = menu ? 'mobile-open-menu' : 'mobile-close-menu';
    return (<div className='mobile-nav-bar mobile-view'>
            <div className="menu-icon-wrapper float-left" onClick={() => toggleMenu(!menu)}>
                <div id="hamburger" className={hamburgerClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={menuClass}>
                {routes.map((item, key) => {
                    return <List.Item
                        name={'error'}
                        key={key}
                        as='a'
                        href={item.path}
                        className='mobile-sidebar-menu'
                    >
                        <List.Icon name={item.icon}/>
                        <List.Content>{item.name[flag ? 0 : 1]}</List.Content>
                    </List.Item>

                })}

                <List.Item>
                    <Image
                        className='mobile-nav-bar-language'
                        src={currentFlag}
                        onClick={() => {
                            switchFlag(!flag);
                            switchLang(currentLanguage)
                        }}
                    />
                </List.Item>
            </div>
        </div>
    )
}

export default MobileMenu;
