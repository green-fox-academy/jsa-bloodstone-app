import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_BUILDINGS_REQUEST = 'fetchBuildingsRequest';
export const FETCH_BUILDINGS_SUCCESS = 'fetchBuildingsSuccess';
export const FETCH_BUILDINGS_FAILURE = 'fetchBuildingsFailure';

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
      .catch((error) => dispatch({ type: FETCH_BUILDINGS_FAILURE, payload: error.message }));
  };
}
