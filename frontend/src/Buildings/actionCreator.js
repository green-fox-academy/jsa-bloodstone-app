import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_BUILDINGS_REQUEST = 'fetchBuildingsRequest';
export const FETCH_BUILDINGS_SUCCESS = 'fetchBuildingsSuccess';
export const FETCH_BUILDINGS_FAILURE = 'fetchBuildingsFailure';
export const ADD_FARM = 'addFarm';
export const ADD_MINE = 'addMine';
export const ADD_ACADEMY = 'addAcademy';

const URL = `http://${SERVER_URL}/kingdom/buildings`;

export function fetchBuildings() {
  return (dispatch) => {
    dispatch({ type: FETCH_BUILDINGS_REQUEST });
    fetch(URL)
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

let uid = 1;

const getMockedBuilding = (type) => {
  uid += 1;
  return {
    id: `temp-${uid}`,
    type,
    level: 1,
  };
};
export function addBuilding(type) {
  switch (type) {
    case 'Farm':
      return {
        type: ADD_FARM,
        payload: getMockedBuilding(type),
      };
    case 'Mine':
      return {
        type: ADD_MINE,
        payload: getMockedBuilding(type),
      };
    case 'Academy':
      return {
        type: ADD_ACADEMY,
        payload: getMockedBuilding(type),
      };
    default:
      return null;
  }
}
