/**
 * Created by mark on 16-10-15.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

var store;
export default function configureStore(initialState) {
    if (store == null) {
        store = createStoreWithMiddleware(rootReducer, initialState);
    }
    return store;
}
