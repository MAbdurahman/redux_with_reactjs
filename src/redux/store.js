//**************** imports ****************//
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//**************** imported reducers ****************//
import rootReducer from './reducers/rootReducer';

//**************** combined reducers ****************//
// const reducers = combineReducers({
// 	root: rootReducer,
// });

//**************** middlewares ****************//
const middleware = [thunk];

//**************** the store ****************//
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
