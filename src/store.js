/**
 * Created by mark on 16-10-15.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

// console.log("init store");
// const store = createStoreWithMiddleware(rootReducer);
export default function configureStore(rootReducer, initialState) {
    // if (store == null) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    // }
    console.log(store);
    return store;
}
