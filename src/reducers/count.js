/**
 * Created by mark on 16-10-15.
 */

import * as types from '../constants/actionTypes';
export default function countChange(count = 0, action) {

    console.log("reducers fuck " + action.type + " state " + count);
    switch (action.type) {

        case types.INCREMENT:
            return count + 1;

        default:
            return count;
    }
}