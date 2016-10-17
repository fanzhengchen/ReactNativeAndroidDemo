/**
 * Created by mark on 16-10-17.
 */
import * as types from '../constants/actionTypes';

export function increase() {
    console.log("action increase");
    return {
        type: types.INCREMENT,
    };
};