import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as resetActions from '../actions/redis-actions'

class ResetCache extends Component{
    constructor(props){
        super(props);
    }
    componentWillUpdate = (nextProps, nextState) => {
        if(nextProps.redis.data === 'OK'){
            alert('Cache has been deleted')
        } else {
            alert('Cache failed to be deleted')
        }
    }
    reset = () => {
        this.props.resetCache()
    }
    render(){
        return (
            <input type='button' className='links' onClick={this.reset} value='Reset Redis Cache'/>
        )
    }
} 

export default connect(({redis})=>({redis}), resetActions)(ResetCache)