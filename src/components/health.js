import React, { Component } from 'react';
import loading from '../loading.svg';
import '../App.css';
import {connect} from 'react-redux'
import * as getHealth from '../actions/health-actions'
import { Link } from 'react-router-dom';
import Header from './header';
import BuildHealth from './build-health';
import ResetCache from './reset-cache';

class Health extends Component {
  constructor(props){
    super(props);
    this.state = {
        healthStatus: 'loading...'
    }
  }
  componentWillMount = () => {
    this.props.getHealth({env: this.props.env.env});
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextProps.health.status !== this.state.healthStatus){
        this.setState({healthStatus: this.props.health.status})
        return true
    } else {
        return false
    }
  }
  render(){
    return this.state.healthStatus !== 'loading...'?
        <div className="App">
            <Header/>  
            <div className='menu'> 
                <button className='links'><Link className='removeDec' to='/'>Main</Link></button>
                <button className='links'><Link className='removeDec' to='/circuit'>Circuit</Link></button>
                <ResetCache/>
            </div> 
            <BuildHealth health={this.props.health}/>
        </div> :
        <div className="App">
            <Header/>
            <div className='menu'> 
                <button className='links'><Link className='removeDec' to='/'>Main</Link></button>
                <button className='links'><Link className='removeDec' to='/circuit'>Circuit</Link></button>
                <ResetCache/>
            </div> 
            <div className="loader" >
                <img src={loading} className="App-logo" alt="logo" />
            </div>
        </div>
    }
}

export default connect(({circuits, health, env})=>({circuits, health, env}), getHealth)(Health)
