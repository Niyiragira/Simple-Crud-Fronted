import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/itemReducer';

const rootReducer = combineReducers({
  items: itemReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; 