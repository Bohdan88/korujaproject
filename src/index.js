import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Contacts, Footer, About, Products, ScrollButton, NavBar} from './view/Components';
import {createBrowserHistory} from 'history';
import {Switch, Route, Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {LangProvider} from './context/LangContext';
import routes from './routes';

// styles
import './style/index.scss';
import 'semantic-ui-css/semantic.min.css';
import 'sweetalert2/src/sweetalert2.scss';


const hist = createBrowserHistory();
const routing = (
    <LangProvider>
        <div>
            <Router history={hist}>
                <div>
                    <NavBar/>
                    <Switch>
                        {routes.map((item, key) =>
                            <Route
                                key={key}
                                path={item.path}
                                component={item.component}/>
                        )}
                    </Switch>
                </div>
            </Router>
            <ScrollButton/>
            <Header/>
            <About/>
            <Products/>
            <Contacts/>
            <Footer/>
        </div>
    </LangProvider>
)


ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
