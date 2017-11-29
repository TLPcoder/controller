'use strict';
import * as types  from '../actions/action-types';
const initState = {
    controls: {
        open: 'neutral',
        close: 'neutral',
        reset: 'neutral',
    },
    services: {}
}

export default (state = initState, action) => {
    switch(action.type){
        case types.SET_CIRCUIT_SUCCESS:
            return {state, ...action.payload}
        case types.SET_CIRCUIT_FAIL:
            return state
        case types.SET_CONTROL_CLASS_NAME:
            return {...state, controls:{...state.controls, ...action.payload}}
        case types.SET_SERVICE_LIST:
            return {...state, services:{...state.services, ...buildServiceObj(action.payload.data.upstream[action.payload.data.upstream.length-1].info)}}
        case types.SET_SERVICE_CLASS_NAME:
            return {...state, services:{...state.services, ...action.payload}}
        default:
            return state;
    }
}

const buildServiceObj = (hystrixService) => {
    let obj = {all: 'neutral'};
    for (let key in hystrixService) {
        const className = hystrixService[key].Status === 'opened' ? 'opened' : 'neutral'
        obj[key] = className
    }
    return obj
}