import {takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/action-types';
import {ciruitController} from '../task/circuit-task'; 

export default function * circuitWatcher() {
    yield takeEvery(types.SET_CIRCUIT, ciruitController);
}