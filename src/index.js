import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Search from './page/search/main';
import Simulation from './page/simulation/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render( 
    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/search' component={Search}/>
        <Route path='/simulation' component={Simulation}/>
      </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
