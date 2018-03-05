import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import GravatarReducer from './reducers/GravatarReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
    	GravatarReducer: GravatarReducer
    }),
    compose(middleware/*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/)
);

export default store;