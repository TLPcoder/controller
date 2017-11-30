import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as env from '../actions/env-actions'
import * as health from '../actions/health-actions';

class ChooseEnv extends Component{
    constructor(props){
        super(props);
    }

    setEnv = (event) => {
        this.props.setEnv({env: event.target.value.toLowerCase()})
        this.props.setClassName({dit: 'neutral', qa: 'neutral', hreg: 'neutral', preprod: 'neutral'});
        this.props.setClassName({[event.target.value.toLowerCase()]: 'activeENV'});
        this.props.getHealth();
    }

    render(){
        const style = this.props.env.className;
        return(
            <div className='envControls'>
                <input className={style.dit} type="button" onClick={this.setEnv}value='DIT'/>
                <input className={style.qa} type="button" onClick={this.setEnv}value='QA'/>
                <input className={style.hreg} type="button" onClick={this.setEnv}value='HREG'/>
                <input className={style.preprod} type="button" onClick={this.setEnv}value='PREPROD'/>
            </div>
        )
    }
}

export default connect(({env, health})=>({env, health}), {...env, ...health})(ChooseEnv)