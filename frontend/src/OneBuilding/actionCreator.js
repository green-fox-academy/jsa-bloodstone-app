import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_ONE_BUILDING_REQUEST = 'fetchOneBuildingRequest';
export const FETCH_ONE_BUILDING_SUCCESS = 'fetchOneBuildingSuccess';
export const FETCH_ONE_BUILDING_FAILURE = 'fetchOneBuildingFailure';

const URL = `http://${SERVER_URL}/kingdom/buildings/`;

export function fetchOneBuilding(buildingId) {
  return (dispatch) => {
    dispatch({ type: FETCH_ONE_BUILDING_REQUEST });
    fetch(`${URL}${buildingId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('An error has occurred, please try later!');
      })
      .then((response) => dispatch({ type: FETCH_ONE_BUILDING_SUCCESS, payload: response }))
      .catch((error) => dispatch({ type: FETCH_ONE_BUILDING_FAILURE, payload: error }));
  };
}
