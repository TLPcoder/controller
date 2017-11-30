import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as env from '../actions/env-actions'

class ChooseEnv extends Component{
    constructor(props){
        super(props);
    }
    setEnv = (event) => this.props.setEnv(event.target.value.toLowerCase())

    render(){
        return(
            <div>
                <input type="button" onClick={this.setEnv}value='DIT'/>
                <input type="button" onClick={this.setEnv}value='QA'/>
                <input type="button" onClick={this.setEnv}value='HREG'/>
                <input type="button" onClick={this.setEnv}value='PREPROD'/>
            </div>
        )
    }
}

export default connect(({env})=>({env}), env)(ChooseEnv)