'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/action-types';

export function * ciruitController({payload}) {
    const config = {
        method: 'GET',
        url: `http://0.0.0.0:3000/hystrix/controller`,
        headers: {
            'x-api': payload.api,
            'x-circuit-status': payload.status,
            'Content-Type': 'application/json',
        }
    };
    try {
        const curcuitStatus = yield call(axios, config);
        // yield put({type: types.SET_CIRCUIT_SUCCESS, payload: curcuitStatus});
    } catch (err) {
        yield put({type: types.SET_CIRCUIT_FAIL, err});
    }
}