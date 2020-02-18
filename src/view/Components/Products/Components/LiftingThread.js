import React, {useState} from 'react';
import {Grid, Modal, Button, Container, Transition} from "semantic-ui-react";
import {PRODUCTS_TABS, PRODUCTS, CLOUD_NAME} from "../../../../constants/";
import {Image as CloudImage} from "cloudinary-react";

const findNumberInString = value => parseInt(value.replace(/^\D+/g, ''))

const LiftingThread = () => {
    const [expanded, setExpand] = useState(false);
    const [moused, setMoused] = useState(false);
    const [imageKey, setImageKey] = useState(0);
    const [hoveredColumn, setHoveredColumn] = useState(0);

    const fetchImages = (value) => {
        return (
            <Grid className={'products-lifting-grid'}>
                <Grid.Row
                >
                    {PRODUCTS_TABS.lifting.desc.map((name, key) => {
                        return <Transition
                            key={key}
                            visible={true}
                            animation='zoom'
                            transitionOnMount={true}
                            unmountOnHide={true}
                            duration={1000}>
                            <Grid.Column
                                className={`products-lifting-column ${key}`}
                                style={{top: key === 0 && window.innerWidth > 768 && '-20px'}}
                                verticalAlign='middle'
                                key={key}
                                largeScreen={5}
                                tablet={7}
                                computer={5}
                                widescreen={3}
                                mobile={16}
                                onMouseEnter={(props) => {
                                    setHoveredColumn(findNumberInString(props.currentTarget.className));
                                    setMoused(true)
                                }}
                                onMouseLeave={() => setMoused(false)}
                            >
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
                                />

                                <CloudImage
                                    alt={""}
                                    cloudName={CLOUD_NAME}
                                    className='products-lifting-image'
                                    publicId={`${PRODUCTS}/${value}/${name}`}
                                />

                            </Grid.Column>
                        </Transition>
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
                    icon='close'
                    size='huge'
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
