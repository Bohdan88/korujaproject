import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import Header from './views/Components/Header/';
import Contacts from './views/Components/Contacts/';
import Footer from './views/Components/Footer/';
import About from './views/Components/About';
import Products from './views/Components/Products';
import {createBrowserHistory } from 'history';
import NotFound from './views/Components/NotFound/';
import NavBar from './shared/';
import {NAV_BAR} from './constants';

import {Link, Switch, Route,   Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
const hist = createBrowserHistory();

const routing = (
    <div>

        <Router history={hist}>
            <NavBar/>
            <div>
                <Switch>
                    {/*<Route  exact path="/" component={Header}/>*/}
                    {/*<Route  path="/" component={Header}/>*/}

                    {NAV_BAR.map((item, key) => {
                        return item.path === "/" ?
                            <Route  exact
                                    key={key}
                                    path={item.path}
                                    component={item.component}
                            />:

                            <Route
                            key={key}
                            path={item.path}
                            component={item.component}/>
                    })}
                    <Route component={NotFound}/>
                </Switch>

            </div>
        </Router>
        <About/>
        <Products/>
        <Contacts/>
        <Footer/>
    </div>
)


ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
