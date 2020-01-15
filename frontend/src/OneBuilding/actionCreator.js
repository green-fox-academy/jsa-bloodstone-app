import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_ONE_BUILDING_REQUEST = 'fetchOneBuildingRequest';
export const FETCH_ONE_BUILDING_SUCCESS = 'fetchOneBuildingSuccess';
export const FETCH_ONE_BUILDING_FAILURE = 'fetchOneBuildingFailure';

const URL = `http://${SERVER_URL}/kingdom/buildings/`;

export function fetchOneBuilding(buildingId, token) {
  return (dispatch) => {
    dispatch({ type: FETCH_ONE_BUILDING_REQUEST });
    return fetch(`${URL}${buildingId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
