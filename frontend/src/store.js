import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import menu from './Menu/menuReducer';
import buildings from './Buildings/buildingReducer';
import troop from './Troop/troopReducer';
import auth from './Login/authReducer';
import troop from './Troops/troopReducer';

const rootReducer = combineReducers({
  auth,
  menu,
  buildings,
  troop,
});

export default createStore(rootReducer, applyMiddleware(thunk));
