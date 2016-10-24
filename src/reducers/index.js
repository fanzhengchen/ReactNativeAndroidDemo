/**
 * Created by mark on 16-10-15.
 */
import {combineReducers} from 'redux';
import count from "./count";
import pair from "./pair";
import listData from "./ChartCar";
const rootReducer = combineReducers({
    count,
    pair,
    listData,
});

export default rootReducer;