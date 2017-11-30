import { combineReducers } from 'redux'
import circuits from './circuit-reducer';
import health from './health-reducer';
import redis from './redis-reducer'
import env from './env'

const rootReducer = combineReducers({
    circuits, health, redis, env
})

export default rootReducer