'use strict';
import * as types from './action-types';

export const circuitController = payload => ({type: types.SET_CIRCUIT, payload});

export const setControlClassName = payload => ({type: types.SET_CONTROL_CLASS_NAME, payload});

export const createServiceList = payload => ({type: types.SET_SERVICE_LIST, payload})

export const setServiceClassName = payload => ({type: types.SET_SERVICE_CLASS_NAME, payload})