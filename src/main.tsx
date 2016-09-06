// import 'bootswatch/paper/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
import './less/metro.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';

import * as Components from './components';

import MainComponent from './main.component';


const App = () => (
    <Router history={browserHistory} >
        <Route path="/" component={MainComponent}>
            <Route path='buttons'>
                <IndexRoute component={Components.Buttons.Button}/>
            </Route>
        </Route>
    </Router>
);

ReactDOM.render((
    <App/>
), document.getElementById("content"));