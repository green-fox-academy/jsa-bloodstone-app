import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import menu from './Menu/menuReducer';
import buildings from './Buildings/buildingReducer';
import troop from './Troop/troopReducer';

const rootReducer = combineReducers({
  menu,
  buildings,
  troop,
});

export default createStore(rootReducer, applyMiddleware(thunk));
