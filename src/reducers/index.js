/**
 * Created by mark on 16-10-15.
 */
import {combineReducers} from 'redux';
import count from "./count";
import pair from "./pair";
const rootReducer = combineReducers({
    count,
    pair,
});

export default rootReducer;