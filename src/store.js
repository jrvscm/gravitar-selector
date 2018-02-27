import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import GravitarReducer from './reducers/GravitarReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
    	GravitarReducer: GravitarReducer
    }),
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;