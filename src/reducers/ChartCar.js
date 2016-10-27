/**
 * Created by fanzhengchen on 10/24/16.
 */
import * as types from '../constants/actionTypes';
var Immutable = require('immutable');

export default function listData(state =
                                     Immutable.List([
                                         Immutable.Map({
                                             flag: 0,
                                             text: 'first',
                                         }),
                                         Immutable.Map({
                                             flag: 1,
                                             text: 'second',
                                         }),
                                     ])
    , action) {
    switch (action.type) {
        case types.CHART_CAR_CHECK: {
            var ret = state.updateIn([action.index, 'flag'], (x) => x ^= 1);
            console.log(ret);
            return ret;
        }
        default:
            return state;
    }
};
