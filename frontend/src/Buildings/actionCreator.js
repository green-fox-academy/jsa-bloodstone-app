import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_BUILDINGS_START = 'fetchBuildingsStart';
export const FETCH_BUILDINGS_SUCCESS = 'fetchBuildingsSuccess';
export const FETCH_BUILDINGS_ERROR = 'fetchBuildingsError';

const URL = `http://${SERVER_URL}/kingdom/buildings`;

export function fetchBuildings() {
  return (dispatch) => {
    dispatch({ type: FETCH_BUILDINGS_START });
    fetch(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('An error has occurred, please try later!');
      })
      .then((response) => dispatch({ type: FETCH_BUILDINGS_SUCCESS, payload: response.buildings }))
      .catch((error) => dispatch({ type: FETCH_BUILDINGS_ERROR, payload: error.message }));
  };
}
