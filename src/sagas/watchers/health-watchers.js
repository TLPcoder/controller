import {takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/action-types';
import {health} from '../task/health-task'; 

export default function * healthWatcher() {
    yield takeEvery(types.GET_HEALTH, health);
}