import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import menu from './reducers/menu';

const rootReducer = combineReducers({
  menu,
});

export default createStore(rootReducer, applyMiddleware(thunk));
