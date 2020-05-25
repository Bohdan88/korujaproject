import React, { useContext } from "react";
import { Header, Tab } from "semantic-ui-react";
import { Cosmetology, LiftingThread, Cosmetics, NewItems } from "./Components/";
import LangContext from "../../../context/LangContext";
import "./style.scss";

const createPanes = (products) => {
  return [
    {
      menuItem: products.tabNames.newItems,
      render: () => (
        <Tab.Pane attached={false}>
          <NewItems />
        </Tab.Pane>
      ),
    },
    {
      menuItem: products.tabNames.lifting,
      render: () => (
        <Tab.Pane attached={false}>
          <LiftingThread />
        </Tab.Pane>
      ),
    },
    {
      menuItem: products.tabNames.cosmetology,
      render: () => (
        <Tab.Pane attached={false}>
          <Cosmetology context={products} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: products.tabNames.cosmetics,
      render: () => (
        <Tab.Pane attached={false}>
          <Cosmetics />
        </Tab.Pane>
      ),
    },
    // {
    //     menuItem: products.tabNames.other,
    //     render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
    // },
  ];
};

const Products = () => {
  const { products } = useContext(LangContext).currentLangData;
  return (
    <div id="products">
      <Header textAlign="center" className="header-products" as="h2">
        {products.header}
      </Header>
      <div className="products-tab">
        <Tab menu={{ secondary: true }} panes={createPanes(products)} />
      </div>
    </div>
  );
};

export default Products;
