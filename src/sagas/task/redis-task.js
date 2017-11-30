import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/action-types';

export function * resetCache({payload}) {
    const config = {
        method: 'GET',
        url: `http://0.0.0.0:3000/reset-cache`,
        headers: {
            'Content-Type': 'application/json',
        }
    };
    console.log('hello dog')
    try {
        const cache = yield call(axios, config);
        yield put({type: types.RESET_CACHE_SUCCESS, payload: cache});
    } catch (err) {
        yield put({type: types.RESET_CACHE_FAIL, err});
    }
}