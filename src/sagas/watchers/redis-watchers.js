import {takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/action-types';
import {resetCache} from '../task/redis-task'; 

export default function * resetWatcher() {
    yield takeEvery(types.RESET_CACHE, resetCache);
}