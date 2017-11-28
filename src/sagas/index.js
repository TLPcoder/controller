'use strict';
import {fork} from 'redux-saga/effects';
import healthWatcher from './watchers/health-watchers';
import circuitWatcher from './watchers/circuit-watchers';

export default function * startForman() {
    yield fork(healthWatcher);
    yield fork(circuitWatcher);
}