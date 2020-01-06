import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import menu from './Menu/menuReducer';
import buildings from './Buildings/buildingReducer';
import auth from './Login/authReducer';
import registration from './Registration/registReducer';
import troops from './Troops/troopReducer';
import resources from './Resources/resourcesReducer';
import oneBuilding from './OneBuilding/oneBuildingReducer';

const rootReducer = combineReducers({
  auth,
  registration,
  menu,
  buildings,
  troops,
  resources,
  oneBuilding,
});

export default createStore(rootReducer, applyMiddleware(thunk));
