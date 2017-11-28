import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import * as getHealth from './actions/health-actions'

class App extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount = () => {
    this.props.getHealth()
  }
  componentDidMount = () => {
    
  }
  render(){
    console.log('props', this.props);
    if(this.props.health.status){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p>Health Status: {this.props.health.status}</p>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      )
    }
  }
}

export default connect(({circuits, health})=>({circuits, health}), getHealth)(App)
