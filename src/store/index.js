import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(rootReducer);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);


export default store;