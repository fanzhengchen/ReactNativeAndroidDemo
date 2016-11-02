/**
 * Created by mark on 16-11-2.
 */
import Rx from "rxjs";
import RxActions from "../actions/RxActions";

const initialState = 0;

const CounterReducer$ = Rx.Observable.of(() => initialState)
    .merge(
        RxActions.increment$.map(payload => state => state + payload),
    );
export default CounterReducer$;
