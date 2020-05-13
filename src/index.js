import React from "react";
import ReactDOM from "react-dom";
import { Transition } from "semantic-ui-react";
import {
  Header,
  Contacts,
  Footer,
  About,
  Products,
  ScrollButton,
  NavBar,
} from "./view/Components";
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { LangProvider } from "./context/LangContext";
import routes from "./routes";

// styles
import "./style/index.scss";
import "semantic-ui-css/semantic.min.css";
import "sweetalert2/src/sweetalert2.scss";

const hist = createBrowserHistory();
const routing = (
  <LangProvider>
    <Transition
      visible={true}
      animation="fade"
      transitionOnMount={true}
      duration={3000}
    >
      <div>
        <Router history={hist}>
          <div>
            <NavBar />
            <Switch>
              {routes.map((item, key) => (
                <Route key={key} path={item.path} component={item.component} />
              ))}
            </Switch>
          </div>
        </Router>
        <ScrollButton />
        <Header />
        <About />
        <Products />
        <Contacts />
        <Footer />
      </div>
    </Transition>
  </LangProvider>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
