import React from 'react';
import ReactDOM from 'react-dom';
import Header from './views/Components/Header/';
import Contacts from './views/Components/Contacts/';
import Footer from './views/Components/Footer/';
import About from './views/Components/About';
import Products from './views/Components/Products';
import {createBrowserHistory} from 'history';
import NotFound from './views/Components/NotFound/';
import NavBar from './shared/';
import {NAV_BAR} from './constants';
import {Sticky} from 'semantic-ui-react';
import {Link, Switch, Route, Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// styles
import 'sweetalert2/src/sweetalert2.scss'
import './style/index.scss';
import 'semantic-ui-css/semantic.min.css'


import {LangProvider} from './context/LangContext';

const hist = createBrowserHistory();


const routing = (
    <LangProvider>
        <div>
            <Router history={hist}>
                <div>
                    <NavBar/>
                    <Switch>
                        {NAV_BAR.map((item, key) => {
                            return item.path === "/" ?
                                <Route exact
                                       key={key}
                                       path={item.path}
                                       component={item.component}
                                /> :

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
    </LangProvider>
)


ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
