import React, {useContext} from 'react';
import {Grid, Tab, Reveal, Header, Transition, Card} from "semantic-ui-react";
import {
    PRODUCTS_TABS,
    PRODUCTS,
    CLOUD_NAME,
    PRODUCTS_TOXINS,
    PRODUCTS_MESO,
    PRODUCTS_FILLERS
} from "../../../../constants/";
import LangContext from '../../../../context/LangContext';
import {Image as CloudImage} from "cloudinary-react";

const fetchImages = (value) => {
    return (
        <Grid>
            <Grid.Row>
                {PRODUCTS_TABS.cosmetics[value].map((name, key) => {
                    return <Transition
                        key={key}
                        visible={true}
                        directional
                        animation='zoom'
                        transitionOnMount={true}
                        // onStart={(e, data) => console.log(data)}
                        duration={1500}>
                        <Grid.Column
                            className='products-column'
                            verticalAlign='middle'
                            key={key}
                            largeScreen={8}
                            tablet={8}
                            computer={8}
                            widescreen={5}
                            mobile={16}
                        >
                            {window.innerWidth > 767 ?
                                <Reveal
                                    className='products-reveal'
                                    animated='fade'>
                                    <Reveal.Content visible>
                                        <Grid.Column
                                            className='products-column-image'
                                            key={key}>
                                            <CloudImage
                                                alt={""}
                                                cloudName={CLOUD_NAME}
                                                className='products-images'
                                                publicId={`${PRODUCTS}/${value}/${name}`}
                                            />
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
                                </Reveal> :
                                <Card
                                    className='products-cosmetology-card'
                                    key={key}>
                                    <CloudImage
                                        alt={""}
                                        cloudƒName={CLOUD_NAME}
                                        className='products-images'
                                        publicId={`${PRODUCTS}/${value}/${name}`}
                                    />
                                    <Card.Header
                                        textAlign='center'
                                    >{name.split('_').join(' ')}</Card.Header>
                                </Card>

                            }
                            <div>
                            </div>
                        </Grid.Column>
                    </Transition>
                })}
            </Grid.Row>
        </Grid>
    )
};

const createPanes = products => {
    return [
        {
            menuItem: products.subTabNames.toxins,
            render: () => <Tab.Pane attached={false}>
                <Transition
                    visible={true}
                    animation='fade'
                    transitionOnMount={true}
                    duration={1500}>
                    {fetchImages(PRODUCTS_TOXINS)}
                </Transition>
            </Tab.Pane>
        },
        {
            menuItem: products.subTabNames.fillers,
            render:
                () => <Tab.Pane attached={false}>
                    <Transition
                        visible={true}
                        animation='fade'
                        transitionOnMount={true}
                        duration={1500}>
                        {fetchImages(PRODUCTS_FILLERS)}
                    </Transition>
                </Tab.Pane>
        },
        {
            menuItem: products.subTabNames.meso,
            render:
                () => <Tab.Pane attached={false}>
                    {fetchImages(PRODUCTS_MESO)}
                </Tab.Pane>
        },
    ]
};


const Cosmetology = () => {
    const {products} = useContext(LangContext).currentLangData;
    const innerWidth = window.innerWidth > 625;
    return (
        <div>
            <Tab
                className='cosmetics-left-tab'
                menu={{
                    fluid: innerWidth,
                    vertical: innerWidth,
                    tabular: innerWidth,
                    pointing: !innerWidth,
                    secondary: !innerWidth
                }}
                panes={createPanes(products)}
            />
        </div>
    );
};


export default Cosmetology;
