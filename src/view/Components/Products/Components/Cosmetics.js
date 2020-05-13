import React, { useContext, useState } from "react";
import {
  Grid,
  Container,
  Transition,
  Item,
  Header,
  Step,
  Icon,
  Segment
} from "semantic-ui-react";
import {
  PRODUCTS,
  CLOUD_NAME,
  PRODUCTS_COSMETICS_STEPS
} from "../../../../constants/";
import { Image as CloudImage } from "cloudinary-react";
import LangContext from "../../../../context/LangContext";

const CustomizedStep = ({ products }) => {
  const [currentStep, selectStep] = useState("choice");
  const [curentKey, setKey] = useState(0);
  return (
    <Transition
      visible={true}
      animation="fade"
      transitionOnMount={true}
      duration={1500}
    >
      <Container className="products-cosmetics-steps" fluid>
        <Step.Group widths={3} attached="top" fluid stackable="tablet">
          {PRODUCTS_COSMETICS_STEPS.map((step, key) => {
            return (
              <Step
                active={key === curentKey}
                onClick={() => {
                  setKey(key);
                  selectStep(step.name);
                }}
                key={key}
              >
                <Icon color={step.color} name={step.icon} />
                <Step.Content>
                  <Step.Title>{products[step.name].header}</Step.Title>
                </Step.Content>
              </Step>
            );
          })}
        </Step.Group>
        <Segment attached>
          <Item.Group>
            <Item className={'products-cosmetics-item'}>
              <CloudImage
                alt={""}
                cloudName={CLOUD_NAME}
                className="products-cosmetics-images"
                publicId={`${PRODUCTS}/others/${PRODUCTS_COSMETICS_STEPS[curentKey].image}`}
              />
              <Item.Content className={"products-cosmetics-content"}>
                {products[currentStep].desc.map((item, key) => {
                  return (
                    <Item.Description
                      className={"products-cosmetics-item"}
                      key={key}
                    >
                      {item}
                    </Item.Description>
                  );
                })}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Container>
    </Transition>
  );
};
const Cosmetics = () => {
  const { products } = useContext(LangContext).currentLangData;

  return (
    <div className="products-cosmetics-container">
      <Grid>
        <Grid.Row>
          <Header className="products-cosmetics-header" as="h3">
            {products.services.header}
          </Header>
        </Grid.Row>
        <Grid.Row>
          <CustomizedStep products={products.services.steps} />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Cosmetics;
