/**
 * Created by fanzhengchen on 11/3/16.
 */
import Rx from "rxjs";
import RxActions from "../actions/RxActions";
var Immutable = require('immutable');

const initialState = Array(40).fill('').map((data, index) => `item fuck #${index}`);

const ListDataReducer$ = Rx.Observable.of(() => Immutable.fromJS(initialState))
    .merge(
        RxActions.removeIndex$.map(index => state => {
            return state.remove(index);
        }),
    );
export default ListDataReducer$;