import React, {useContext} from 'react';
import {Grid, Container, Transition, Card} from "semantic-ui-react";
import {PRODUCTS_TABS, PRODUCTS, CLOUD_NAME} from "../../../../constants/";
import {Image as CloudImage} from "cloudinary-react";
import LangContext from '../../../../context/LangContext';

const Cosmetics = () => {
    const {products} = useContext(LangContext).currentLangData;
    // console.log(products, 'products')

    const fetchImages = (value) => {
        return (
            <Grid  className='products-cosmetics-grid'>
                <Grid.Row>
                    {PRODUCTS_TABS.partners.logo.map((name, key) => {
                        return <Transition
                            key={key}
                            visible={true}
                            animation='fade'
                            transitionOnMount={true}
                            unmountOnHide={true}
                            duration={1500}>
                            <Grid.Column
                                className={`products-cosmetics-column`}
                                // style={{top: key === 0 && window.innerWidth > 768 && '-20px'}}
                                verticalAlign='middle'
                                 key={key}
                                 largeScreen={5}
                                 tablet={7}
                                 computer={5}
                                 widescreen={3}
                                 mobile={16}
                            >
                            <Card
                                fluid
                                className="products-cosmetics-card"
                            >

                                <CloudImage
                                    alt={""}
                                    cloudName={CLOUD_NAME}
                                    className='products-cosmetics-image'
                                    publicId={`${PRODUCTS}/${value}/${name}`}
                                />
                                <Card.Header
                                    as={'h3'}
                                    className='products-cosmetics-header'
                                    textAlign={'center'}>
                                    {name.split('_').join(' ')}
                                </Card.Header>
                                <Card.Description
                                    className="products-cosmetics-description"
                                >
                                    {products.partners &&  products.partners[key]}
                                </Card.Description>
                            </Card>
                            </Grid.Column>
                        </Transition>
                    })}
                </Grid.Row>
            </Grid>
        )
    };


    return (
        <div className='products-lifting-thread'>
            <Container fluid>
                {fetchImages('partners')}
            </Container>
        </div>
    );
};


export default Cosmetics;
