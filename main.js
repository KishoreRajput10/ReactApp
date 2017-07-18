import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import PageNotFound from './pagenotfound.jsx'
import State from './state.jsx'
import Form from './form.jsx'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'


ReactDOM.render((

    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <Route path='/home' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/state' component={State}></Route>
            <Route path='form' component={Form}></Route>
            <Route path='*' component={PageNotFound}></Route>
           
        </Route>
    </Router>

), document.getElementById('app'));

