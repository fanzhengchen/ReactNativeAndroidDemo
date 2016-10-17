/**
 * Created by mark on 16-10-17.
 */
import * as types from '../constants/actionTypes';

export function changeCount() {
    return {
        type: types.INCREMENT,
    };
};