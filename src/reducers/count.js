/**
 * Created by mark on 16-10-15.
 */

import * as types from '../constants/actionTypes';
var initState = {
    count: 0,
};
export default function countChange(state = 0, action) {

    console.log("reducers fuck " + action.type + " state " + state);
    switch (action.type) {

        case types.INCREMENT:
            return state + 1;

        default:
            return state;
    }
}