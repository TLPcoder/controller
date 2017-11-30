import * as types from '../actions/action-types'

const initState = {
    env: null,
    className: {
        dit: 'neutral',
        qa: 'neutral',
        hreg: 'neutral',
        preprod: 'neutral'
    }
}

export default (state = initState, action) => {
    switch(action.type){
        case types.SET_ENV:
            return {...state, ...action.payload}
        case types.SET_CLASS_NAME:
            return {...state, className: {...state.className, ...action.payload}}
        default:
            return state
    }
}
