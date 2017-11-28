'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/action-types';

export function * health({payload}) {
    const config = {
        method: 'GET',
        url: `http://0.0.0.0:3000/health`,
        headers: {
            'X-guid': 100078775,
            'Content-Type': 'application/json',
        }
    };
    try {
        const health = yield call(axios, config);
        yield put({type: types.GET_HEALTH_SUCCESS, payload: health});
    } catch (err) {
        yield put({type: types.GET_HEALTH_FAIL, err});
    }
}