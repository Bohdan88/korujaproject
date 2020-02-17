import React, {useContext, useState} from 'react';
import {
    Grid,
    Tab,
    Reveal,
    Header,
    Image,
    Modal, Button,
    Container,
    Segment,
    Transition
} from "semantic-ui-react";
import {PRODUCTS_TABS, PRODUCTS, CLOUD_NAME} from "../../../../constants/";
import LangContext from '../../../../context/LangContext';
import {Image as CloudImage, Transformation, CloudinaryContext} from "cloudinary-react";

const findNumberInString = value => parseInt(value.replace(/^\D+/g, ''))

const LiftingThread = () => {
    const {products} = useContext(LangContext).currentLangData;
    const [expanded, setExpand] = useState(false);
    const [moused, setMoused] = useState(false);
    const [imageKey, setImageKey] = useState(0);
    const [hoveredColumn, setHoveredColumn] = useState(0);

    const innerWidth = window.innerWidth > 625 ? true : false
    const fetchImages = (value) => {
        return (
            <Grid className={'products-lifting-grid'}>
                <Grid.Row
                >
                    {PRODUCTS_TABS.lifting.desc.map((name, key) => {
                        // console.log(`${PRODUCTS}/${value}/${name}`, 'link')
                        return <Grid.Column
                            className={`products-lifting-column ${key}`}
                            verticalAlign='middle'
                            key={key}
                            largeScreen={5}
                            tablet={8}
                            computer={8}
                            widescreen={3}
                            mobile={16}
                            onMouseEnter={(props) => {
                                setHoveredColumn(findNumberInString(props.currentTarget.className));
                                setMoused(true)
                            }}
                            onMouseLeave={() => setMoused(false)}
                        >

                            {/*{!expanded ? <Transition*/}
                            {/*visible={key === hoveredColumn && moused}*/}
                            {/*// animation='scale'*/}
                            {/*// duration={300}*/}

                            {/*>*/}
                            <Button
                                className='products-lifting-button-expand'
                                icon={'expand'}
                                onClick={() => {
                                    setExpand(true);
                                    setImageKey(key)
                                }}
                                style={{
                                    visibility: key === hoveredColumn && moused ? 'visible' : 'hidden'
                                }}
                                // style={{
                                //     position: 'absolute',
                                //     top: 45,
                                //     right: 20,
                                //     margin: 0,
                                //     // bottom: 20,
                                //     background: 'transparent'
                                // }}
                                // style={{
                                //     visibility: key === hoveredColumn && moused ? 'visible' : 'hidden'
                                // }}
                            />

                            {/*</Transition> : null}*/}
                            <CloudImage
                                alt={""}
                                cloudName={CLOUD_NAME}
                                className='products-lifting-image'
                                publicId={`${PRODUCTS}/${value}/${name}`}
                            />

                        </Grid.Column>
                    })}
                </Grid.Row>
            </Grid>
        )
    };

    const setModalImage = (value, imageKey) => {
        return PRODUCTS_TABS.lifting.desc.map((name, key) => {
            if (imageKey === key) {
                return <CloudImage
                    key={key}
                    alt={""}
                    cloudName={CLOUD_NAME}
                    className='products-lifting-modal-image'
                    publicId={`${PRODUCTS}/${value}/${name}`}
                />
            }
        })
    };

    return (
        <div className='products-lifting-thread'>
            <Container fluid>
                {fetchImages('lifting')}
            </Container>
            <Modal
                className='products-lifting-modal'
                closeIcon={<Button
                    className='products-lifting-modal-button-close'
                    icon={'close'}
                    size={'huge'}
                    // style={{
                    //     background: 'transparent',
                    //     position: 'absolute',
                    //     right: -10,
                    //     top: 80,
                    //     zIndex: 50,
                    //     margin: 0
                    // }}
                />
                }
                onClose={() => setExpand(false)}
                open={expanded}>
                <Modal.Content
                    className='products-lifting-modal-content'
                >
                    {setModalImage('lifting', imageKey)}
                </Modal.Content>
            </Modal>
        </div>
    );
};


export default LiftingThread;
