import React, {Component} from 'react';
import {Image, Grid, Tab} from "semantic-ui-react";
import botulax100 from "../../../../assets/cosmetics/botulax100.jpg";
import {PRODUCTS_TABS, PRODUCTS_LINK} from "../../../../constants/";


const panes = [
    { menuItem: 'Токсины', render: () => <Tab.Pane>Токсины</Tab.Pane> },
    { menuItem: 'Филлеры', render: () => <Tab.Pane>Филлеры</Tab.Pane> },
    { menuItem: 'Мезопрепараты', render: () => <Tab.Pane>Мезопрепараты</Tab.Pane> },
]

class TabContent extends Component {
    state = {
        panes: [
            { menuItem: 'Токсины', render: () => <Tab.Pane>{this.fetchImages('toxins')}</Tab.Pane> },
            { menuItem: 'Филлеры', render: () => <Tab.Pane>{this.fetchImages('fillers')}</Tab.Pane> },
            { menuItem: 'Мезопрепараты', render: () => <Tab.Pane>Мезопрепараты</Tab.Pane> },
        ]
    };

    fetchImages = (value) => {
        return (
            <Grid>
                <Grid.Row
                    columns={3}>
                    {PRODUCTS_TABS.cosmetics[value].map((name, key) => {
                        return <Grid.Column key={key}>
                            <Image
                                className='products-images'
                                src={`${PRODUCTS_LINK}${value}/${name}`}/>
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
                    className='cosmetics-left-tab'
                    menu={{ fluid: true, vertical: true, tabular: true }}
                    panes={this.state.panes}
                />

            </div>
        );
    }
};

export default TabContent;
