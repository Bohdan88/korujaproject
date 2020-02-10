import React, {Component} from 'react';
import {
    Header,
    Tab,
    Image
} from 'semantic-ui-react';
import './style.scss';
import TabContent from './Components/';

import botex from '../../../assets/botex.jpg';
import banner from '../../../assets/banner.jpg';


const panes = [
    {
        menuItem: 'КОСМЕТОЛОГИЯ',
        render: () => <Tab.Pane attached={false}><TabContent/></Tab.Pane>,
    },
    {
        menuItem: 'НИТЕВОЙ ЛИФТИНГ',
        render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
        menuItem: 'КОСМЕТИКА',
        render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
    {
        menuItem: 'ДРУГИЕ ТОВАРЫ',
        render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
    },
];

class Products extends Component {
    render () {
        return (
            <div id="products">
                <Header
                    textAlign='center'
                    className='header-products'
                    as='h2'>
                    ПРОДУКЦИЯ
                </Header>
                <div className="products-tab">
                <Tab menu={{secondary: true}} panes={panes}/>

                </div>
            </div>
        );
    }
}

export default Products;
