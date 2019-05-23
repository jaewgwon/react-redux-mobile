import types from './types';

export function selectMonthly() {
    return {
        type: types.SELECT_MONTHLY
    }
}

export function selectDaily() {
    return {
        type: types.SELECT_DAILY
    }
}