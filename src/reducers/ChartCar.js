/**
 * Created by fanzhengchen on 10/24/16.
 */
import * as types from '../constants/actionTypes';

export default function listData(state = {
    fuck: 'fuck',
}, action) {
    console.log("getList " + types.CHART_CAR_CHECK + " " + action.type + " " + JSON.stringify(state));
    switch (action.type) {
        case types.CHART_CAR_CHECK: {
            // var {flag, text}= state[action.index];
            // flag ^= 1;
            // state[action.index] = {
            //     flag: flag,
            //     text: text,
            // };
            console.log("action index %d", action.index);
            var {fuck} = {...state};
            var text = fuck;
            return {fuck: text + " " + text};
        }
        default:
            return state;
    }
};
