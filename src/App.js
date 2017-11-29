import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as getHealth from './actions/health-actions'
import Health from './components/health';
import {Switch, Route} from 'react-router-dom';
import Main from './components/main';
import Circuit from './components/circuit'

const App = props => {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/health' component={Health}/>
            <Route exact path='/circuit' component={Circuit}/>
        </Switch>
    );
}

export default App;
