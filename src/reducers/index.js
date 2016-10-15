/**
 * Created by mark on 16-10-15.
 */
import {combineReducers} from 'redux';
import count from "./count";

const rootReducer = combineReducers({
    count,
});

export default rootReducer;