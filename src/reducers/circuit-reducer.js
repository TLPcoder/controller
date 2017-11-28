'use strict';
import * as types  from '../actions/action-types';
const initState = {}

export default (state = initState, action) => {
    switch(action.type){
        case types.SET_CIRCUIT_SUCCESS:
            return {...action.payload}
        case types.SET_CIRCUIT_FAIL:
            return state
        default:
            return state;
    }
}