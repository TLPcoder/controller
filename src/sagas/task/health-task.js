'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/action-types';
import { envConfig } from '../env-config';

export function * health({payload}) {
    const config = envConfig()[payload.env];
    const configHealth = {
        method: 'GET',
        url: `http://0.0.0.0:3000/health`,
        headers: {
            'X-guid': 100078775,
            'Content-Type': 'application/json',
        }
    };
    try {
        // const cookie = yield call(axios, getRequestConfig(envConfig.cookie))
        const health = yield call(axios, configHealth);
        yield put({type: types.GET_HEALTH_SUCCESS, payload: health});
        yield put({type: types.SET_SERVICE_LIST, payload: health});
    } catch (err) {
        yield put({type: types.GET_HEALTH_FAIL, err});
    }
}

const getRequestConfig = (config) => ({
    method: config.method,
    url: config.url,
    headers: config.headers
})