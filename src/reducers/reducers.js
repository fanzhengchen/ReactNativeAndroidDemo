/**
 * Created by mark on 16-11-2.
 */
import Rx from "rxjs";
import CounterReducer$ from "../reducers/CounterReducer"
import ListDataReducer$ from "../reducers/ListDataReducer";
const reducer$ = Rx.Observable.merge(
    CounterReducer$.map(reducer => ["counter", reducer]),
    ListDataReducer$.map(reducer => ["listData", reducer]),
);

export default reducer$;