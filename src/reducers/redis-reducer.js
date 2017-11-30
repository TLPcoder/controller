import * as types from '../actions/action-types';

const initialState = {
    status: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case types.RESET_CACHE_SUCCESS:
            return {...action.payload};
        case types.RESET_CACHE_FAIL:
            return {...action.payload};
        default: 
            return state
    }
}   