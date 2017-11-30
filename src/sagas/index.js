import {fork} from 'redux-saga/effects';
import healthWatcher from './watchers/health-watchers';
import circuitWatcher from './watchers/circuit-watchers';
import resetWatcher from './watchers/redis-watchers';

export default function * startForman() {
    yield fork(healthWatcher);
    yield fork(circuitWatcher);
    yield fork(resetWatcher);
}