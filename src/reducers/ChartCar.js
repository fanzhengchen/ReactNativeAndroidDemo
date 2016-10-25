/**
 * Created by fanzhengchen on 10/24/16.
 */
import * as types from '../constants/actionTypes';
var Immutable = require('Immutable');

export default function listData(state =
                                     Immutable.List([
                                         Immutable.Map({
                                             flag: 0,
                                         }),
                                         Immutable.Map(
                                             {
                                                 flag: 1,
                                             }),
                                     ])
    , action) {
    console.log("getList " + types.CHART_CAR_CHECK + " " + action.type + " " + JSON.stringify(state));
    switch (action.type) {
        case types.CHART_CAR_CHECK: {
            console.log("action index %d", action.index);
            var {flag} = state[0];
            return {flag: flag + flag};
        }
        default:
            return state;
    }
};
