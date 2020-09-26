import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gameplayReducer from '../reducers/index.js';

const store = createStore(gameplayReducer, applyMiddleware(thunk));

export default store;