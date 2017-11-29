'use strict';
import * as types  from '../actions/action-types';
const initState = {}

export default (state = initState, action) => {
    switch(action.type){
        case types.GET_HEALTH_SUCCESS:
            return {...action.payload.data}
        case types.GET_HEALTH_FAIL:
            return state
        default:
            return state;
    }
}
