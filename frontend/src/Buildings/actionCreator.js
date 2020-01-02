import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_BUILDINGS_REQUEST = 'fetchBuildingsRequest';
export const FETCH_BUILDINGS_SUCCESS = 'fetchBuildingsSuccess';
export const FETCH_BUILDINGS_FAILURE = 'fetchBuildingsFailure';
export const ADD_BUILDING_REQUEST = 'addBuildingRequest';
export const ADD_BUILDING_SUCCESS = 'addBuildingSuccess';
export const ADD_BUILDING_FAILURE = 'addBuildingFailure';

const URL = `http://${SERVER_URL}/kingdom/buildings`;

export function fetchBuildings() {
  return (dispatch) => {
    dispatch({ type: FETCH_BUILDINGS_REQUEST });
    return fetch(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('An error has occurred, please try later!');
      })
      .then((response) => dispatch({ type: FETCH_BUILDINGS_SUCCESS, payload: response.buildings }))
      .catch((error) => dispatch({ type: FETCH_BUILDINGS_FAILURE, payload: error }));
  };
}

let id = 1;

const getMockedBuilding = (type) => {
  id += 1;
  return {
    id: `temp-${id}`,
    type,
    level: 1,
  };
};

export function addBuildingSuccess(type) {
  return {
    type: ADD_BUILDING_SUCCESS,
    payload: getMockedBuilding(type),
  };
}

// The following function is for linking to backend
export function addBuildings() {
  return (dispatch) => {
    dispatch({ type: ADD_BUILDING_REQUEST });
    return fetch(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('An error has occurred, please try later!');
      })
      .then((response) => dispatch({ type: ADD_BUILDING_SUCCESS, payload: response.buildings }))
      .catch((error) => dispatch({ type: ADD_BUILDING_FAILURE, payload: error }));
  };
}
