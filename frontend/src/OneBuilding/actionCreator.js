import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_ONE_BUILDING_REQUEST = 'fetchOneBuildingRequest';
export const FETCH_ONE_BUILDING_SUCCESS = 'fetchOneBuildingSuccess';
export const FETCH_ONE_BUILDING_FAILURE = 'fetchOneBuildingFailure';
export const UPGRADE_ONE_BUILDING_REQUEST = 'upgradeOneBuildingRequest';
export const UPGRADE_ONE_BUILDING_SUCCESS = 'upgradeOneBuildingSuccess';
export const UPGRADE_ONE_BUILDING_FAILURE = 'upgradeOneBuildingFailure';

// need to changed
const URL = `http://${SERVER_URL}/kingdom/buildings/`;

export function fetchOneBuilding(buildingId, token) {
  console.log(buildingId);
  return (dispatch) => {
    dispatch({ type: FETCH_ONE_BUILDING_REQUEST });
    fetch(`${URL}${buildingId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.json()+'dddddddddd');
        return response.json();
      }
      throw new Error('An error has occurred, please try later!');
    })
    .then((response) => dispatch({ type: FETCH_ONE_BUILDING_SUCCESS, payload: response }))
    .catch((error) => dispatch({ type: FETCH_ONE_BUILDING_FAILURE, payload: error }));
  };
}
