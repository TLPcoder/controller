import React, {Component} from 'react';
import loading from '../loading.svg'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from './header'
import * as getHealth from '../actions/health-actions'
import * as setCicuit from '../actions/circuit-actions';
import ResetCache from './reset-cache';

class Circuit extends Component {
    constructor(props){
        super(props)
        this.state = {
            apis: '',
            status: ''
        }
    }
    componentWillMount = () => (this.props.getHealth({env: this.props.env.env}))
    resetContols = (controls) => (this.props.setControlClassName(controls))
    resetServices = (controls) => (this.props.setServiceClassName(controls))
    setStatus = (status) => (this.setState({status: status}))
    trimApis = () => (this.state.apis.split(',').filter(e => e.length > 0).join(','))

    runCommand = () => {
        this.props.circuitController({api: this.trimApis(), status: this.state.status})
        this.props.getHealth({env: this.props.env.env})
        this.setState({apis: ''})
    }

    setClassName = (event) => {
        if (event.target.className === 'neutral') {
            this.resetServices({[event.target.value.toLowerCase()]:'active'})
        } else if (event.target.className === 'active') {
            this.resetServices({[event.target.value.toLowerCase()]:'neutral'})
        } else if(event.target.className === 'opened') {
            this.resetServices({[event.target.value.toLowerCase()]:'activeOpened'})
        } else if(event.target.className === 'activeOpened') {
            this.resetServices({[event.target.value.toLowerCase()]:'opened'})
        }  
    }
    setCommand = (event) => {
        if (event.target.className === 'neutral') {
            this.setState({apis: this.state.apis + ',' + event.target.value})
        } else if (event.target.className === 'active') {
            this.setState({apis: this.state.apis.replace(event.target.value, '')})
        } else if(event.target.className === 'opened') {
            this.setState({apis: this.state.apis + ',' + event.target.value})
        } else if(event.target.className === 'activeOpened') {
            this.setState({apis: this.state.apis.replace(event.target.value, '')})
        } 
        this.setClassName(event)
    }

    createStatusControls = () => ['Open', 'Close', 'Reset'].map(status =>
        <div className='individualControls'>
            <input type="button" name='statusControl' value={status} onClick={(event) => {
                this.resetContols({open: 'neutral',close: 'neutral',reset: 'neutral'})
                this.resetContols({[status.toLowerCase()]: 'active'})
                this.setStatus(status.toLowerCase())
            }} className={this.props.circuits.controls[status.toLowerCase()]}/>
        </div>)

    createAll = () => (
        <div className='individualServices'>
            <input type='button' value ='All' onClick={(event) => {
                if(this.props.circuits.services.all === 'neutral') {
                    this.props.createServiceList({data: this.props.health})
                    this.setState({apis:'all'})
                }
            this.setClassName(event)
            }} className={this.props.circuits.services.all}/>
        </div>
    )
    createService = (key) => (
        <div className='individualServices'>
            <input type='button' name={key} value={key} onClick={(event) =>{
                if(this.state.apis === 'all') {
                    this.setState({apis: key})
                    this.resetServices({all: 'neutral'})
                    this.setClassName(event)
                } else {
                    this.setCommand(event)
                }
            }} className={this.props.circuits.services[key]}/>
        </div>
    )
    createCheckList = () => {
        var checkBoxs = [];
        checkBoxs.push(this.createAll())
        const hystrixService = this.props.health.upstream[this.props.health.upstream.length-1].info
        for(let key in hystrixService){
            if(!key.toLowerCase().startsWith('check')) {
                checkBoxs.push(this.createService(key))
            }
        }
        return checkBoxs;
    }

    render() {
        console.log('props', this.state);
        if(Object.keys(this.props.health).length > 0){
            return (
                <div className="App">
                    <Header/>
                    <div className='menu'> 
                        <button className='links'><Link className='removeDec' to='/'>Main</Link></button>
                        <button className='links'><Link className='removeDec' to='/health'>Health</Link></button>
                        <ResetCache/>
                    </div>
                    <br/>
                    <input className='neutral run-command' type="button" value='Run Commmand' onClick={this.runCommand}/>
                    <div className='createStatusControls'>
                        {this.createStatusControls()}
                    </div>
                    <br/>
                    <div className='createCheckList'>
                        {this.createCheckList()}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <Header/>
                    <div className='menu'> 
                        <button className='links'><Link className='removeDec' to='/'>Main</Link></button>
                        <button className='links'><Link className='removeDec' to='/health'>Health</Link></button>
                        <ResetCache/>
                    </div>
                    <div className="loader" >
                        <img src={loading} className="App-logo" alt="logo" />
                    </div>
                </div>
            )
        }
    }
}

export default connect(({circuits, health, env})=>({circuits, health, env}), {...getHealth, ...setCicuit})(Circuit)