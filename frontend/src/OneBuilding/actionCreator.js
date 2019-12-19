import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_ONE_BUILDING_REQUEST = 'fetchOneBuildingRequest';
export const FETCH_ONE_BUILDING_SUCCESS = 'fetchOneBuildingSuccess';
export const FETCH_ONE_BUILDING_FAILURE = 'fetchOneBuildingFailure';

export function fetchOneBuilding(buildingId) {
  return (dispatch) => {
    dispatch({ type: FETCH_ONE_BUILDING_REQUEST });
    fetch(`http://${SERVER_URL}/kingdom/buildings/${buildingId}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((response) => dispatch({ type: FETCH_ONE_BUILDING_SUCCESS, payload: response }))
      .catch((error) => dispatch({ type: FETCH_ONE_BUILDING_FAILURE, payload: error }));
  };
}
