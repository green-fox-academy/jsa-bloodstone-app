import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_RESOURCES_REQUEST = 'fetchResourcesRequest';
export const FETCH_RESOURCES_SUCCESS = 'fetchResourcesSuccess';
export const FETCH_RESOURCES_FAILURE = 'fetchResourcesFailure';

const URL = `http://${SERVER_URL}/kingdom/resources`;

export function fetchResources(token) {
  return (dispatch) => {
    dispatch({ type: FETCH_RESOURCES_REQUEST });
    fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('An error has occurred, please try later!');
    })
    .then((response) => dispatch({ type: FETCH_RESOURCES_SUCCESS, payload: response.resources }))
    .catch((error) => dispatch({ type: FETCH_RESOURCES_FAILURE, payload: error }));
  };
}
