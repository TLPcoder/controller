import React, {Component} from 'react';
import logo from '../logo.svg';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from './header'
import * as getHealth from '../actions/health-actions'

class Circuit extends Component {
    constructor(props){
        super(props)
        this.state = {
            apis: '',
            status: ''
        }
    }
    componentWillMount = () => {
        this.props.getHealth()
    }
    runCommand = () => {

    }

    createStatusControls = () => ['Open', 'Close', 'Reset'].map(status => <input type="button" value={status} onClick={(event) => {
        this.createStatusControls()
        this.setClassName(event);
        this.setStatus(status.toLowerCase())
    }} className='neutral'/>)

    setClassName = (event) => {
        if (event.target.className === 'neutral') {
            event.target.className = 'active';
        } else if (event.target.className === 'active') {
            event.target.className = 'neutral';
        } else if(event.target.className === 'opened') {
            event.target.className = 'activeOpened';
        } else if(event.target.className === 'activeOpened') {
            event.target.className = 'opened';
        }  
    }
    setCommand = (event) => {
        this.setClassName(event)
        if (event.target.className === 'neutral') {
            this.setState({apis: this.state.apis + ',' + event.target.value})
        } else if (event.target.className === 'active') {
            this.setState({apis: this.state.apis.replace(event.target.value, '')})
        } else if(event.target.className === 'opened') {
            this.setState({apis: this.state.apis + ',' + event.target.value})
        } else if(event.target.className === 'activeOpened') {
            this.setState({apis: this.state.apis.replace(event.target.value, '')})
        } 
    }

    setStatus = (status) => this.setState({status: status})

    createCheckList = () => {
        var checkBoxs = [];
        const hystrixService = this.props.health.upstream[this.props.health.upstream.length-1].info
        for(let key in hystrixService){
            const className = hystrixService[key].Status === 'opened' ? 'opened' : 'neutral'
            checkBoxs.push(<div><input type='button' name={key} value={key} onClick={this.setCommand} className={className}/></div>)
        }
        return checkBoxs;
    }
    render() {
        console.log(this.props);
        console.log('state', this.state);
        if(Object.keys(this.props.health).length > 0){
            return (
                <div className="App">
                    <Header/>
                    <button><Link to='/health'>Health</Link></button>
                    <button><Link to='/'>Main</Link></button>
                    {this.createStatusControls()}
                    {this.createCheckList()}
                    <input type="button" value='Run Commmand' onClick={this.runCommand()}/>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <Header/>
                    <button><Link to='/health'>Health</Link></button>
                    <button><Link to='/'>Main</Link></button>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}

export default connect(({circuits, health})=>({circuits, health}), getHealth)(Circuit)