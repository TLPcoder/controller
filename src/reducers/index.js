import { combineReducers } from 'redux'
import circuits from './circuit-reducer';
import health from './health-reducer';
const rootReducer = combineReducers({
    circuits, health
})

export default rootReducer