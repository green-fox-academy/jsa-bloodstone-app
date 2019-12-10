import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import menu from './Menu/menuReducer';
import buildings from './Buildings/buildingReducer';

const rootReducer = combineReducers({
  menu,
  buildings,
});

export default createStore(rootReducer, applyMiddleware(thunk));
