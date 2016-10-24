/**
 * Created by fanzhengchen on 10/24/16.
 */
import {combineReducers} from 'redux';
import listData from "./ChartCar";
const charCarReducer = combineReducers({
    listData,
});
export default charCarReducer;