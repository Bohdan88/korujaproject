import React, {Component} from 'react';
import {
    Image,
    Grid,
    Tab,
    Reveal,
    Header
} from "semantic-ui-react";
import {PRODUCTS_TABS, PRODUCTS_LINK} from "../../../../constants/";


class TabContent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            panes: [
                {menuItem: 'Токсины', render: () => <Tab.Pane>{this.fetchImages('toxins')}</Tab.Pane>},
                {menuItem: 'Филлеры', render: () => <Tab.Pane>{this.fetchImages('fillers')}</Tab.Pane>},
                {menuItem: 'Мезопрепараты', render: () => <Tab.Pane>Мезопрепараты</Tab.Pane>},
            ],
            revealed: false,
        };
    }


    fetchImages = (value) => {
        return (
            <Grid>
                <Grid.Row

                >
                    {PRODUCTS_TABS.cosmetics[value].map((name, key) => {
                        return <Grid.Column
                            className='product-column'
                            verticalAlign={'middle'}
                            key={key}
                            largeScreen={8}
                            tablet={8}
                            computer={8}
                            widescreen={5}
                            mobile={16}
                        >
                            <Reveal
                                className={'products-reveal'}
                                animated='fade'>
                                <Reveal.Content visible>
                                    <Grid.Column key={key}>
                                        <Image
                                            className='products-images'
                                            src={`${PRODUCTS_LINK}${value}/${name}`}/>
                                    </Grid.Column>
                                </Reveal.Content>
                                <Reveal.Content
                                    className='product-name'
                                    hidden>
                                    <Header
                                        as={'h3'}
                                    >
                                        {name.split('_').join(' ')}
                                    </Header>
                                </Reveal.Content>
                                <Reveal/>
                            </Reveal>
                        </Grid.Column>
                    })}
                </Grid.Row>
            </Grid>
        )
    };


    render () {
        return (
            <div>
                <Tab
                    ref={this.tabRef}
                    className='cosmetics-left-tab'
                    menu={{fluid: true, vertical: true, tabular: true}}
                    panes={this.state.panes}
                />

            </div>
        );
    }
}
;

export default TabContent;
