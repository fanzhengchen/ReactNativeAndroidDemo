/**
 * Created by mark on 16-10-15.
 */

import * as types from '../constants/actionTypes';

export default function countChange(state = 0, action) {

    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        default:
            return state;
    }
}