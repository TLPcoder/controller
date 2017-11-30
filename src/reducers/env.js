import * as types from '../actions/action-types'

export default (state = null, action) => {
    switch(action.type){
        case types.SET_ENV:
            return action.payload
        default:
            return state
    }
}
