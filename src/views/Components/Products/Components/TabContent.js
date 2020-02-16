import React, {useContext} from 'react';
import {
    Grid,
    Tab,
    Reveal,
    Header,
    Image
} from "semantic-ui-react";
import {PRODUCTS_TABS, PRODUCTS, CLOUD_NAME} from "../../../../constants/";
import LangContext from '../../../../context/LangContext';
import {Image as CloudImage, Transformation, CloudinaryContext} from "cloudinary-react";

const fetchImages = (value) => {
    return (
        <Grid>
            <Grid.Row

            >
                {PRODUCTS_TABS.cosmetics[value].map((name, key) => {
                    return <Grid.Column
                        className='product-column'
                        verticalAlign='middle'
                        key={key}
                        largeScreen={8}
                        tablet={8}
                        computer={8}
                        widescreen={5}
                        mobile={16}
                    >
                        <Reveal
                            className='products-reveal'
                            animated='fade'>
                            <Reveal.Content visible>
                                <Grid.Column key={key}>
                                    {/*<Image*/}
                                    {/*className='products-images'*/}
                                    {/*src={`${PRODUCTS_LINK}${value}/${name}`}/>*/}
                                    <CloudImage
                                        alt={""}
                                        cloudName={CLOUD_NAME}
                                        className='products-images'
                                        publicId={`${PRODUCTS}/${value}/${name}`}
                                        // width="300"
                                        // crop="scale"
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
                        </Reveal>
                    </Grid.Column>
                })}
            </Grid.Row>
        </Grid>
    )
};

const createPanes = products => {
    return [
        {
            menuItem: products.subTabNames.toxins,
            render: () => <Tab.Pane attached={false}>{fetchImages('toxins')}</Tab.Pane>
        },
        {
            menuItem: products.subTabNames.fillers,
            render:
                () => <Tab.Pane attached={false}>{fetchImages('fillers')}</Tab.Pane>
        }
        ,
        {
            menuItem: products.subTabNames.meso,
            render:
                () => <Tab.Pane attached={false}>{fetchImages('meso')}</Tab.Pane>
        }
        ,
    ]
};


const TabContent = () => {
    const {products} = useContext(LangContext).currentLangData;
    const innerWidth = window.innerWidth > 625 ? true : false
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


export default TabContent;
