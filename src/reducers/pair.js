/**
 * Created by mark on 16-10-17.
 */
import * as types from '../constants/actionTypes';
export default function pairChange(state = {
    first: 'first',
    second: 'second',
}, action) {

    console.log("reducers fuck " + action.type + " state ");
    switch (action.type) {

        case types.PAIR_CHANGE:
            return {
                first: state.first + " " + state.first,
                second: state.second + " " + state.second,
            };

        default:
            return state;
    }
}