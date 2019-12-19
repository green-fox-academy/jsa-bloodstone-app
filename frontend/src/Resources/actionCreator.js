import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_RESOURCES_REQUEST = 'fetchResourcesRequest';
export const FETCH_RESOURCES_SUCCESS = 'fetchResourcesSuccess';
export const FETCH_RESOURCES_FAILURE = 'fetchResourcesFailure';
export const UPDATE_RESOURCES = 'updateResources';

const URL = `http://${SERVER_URL}/kingdom/resources`;

export function fetchResources() {
  return (dispatch) => {
    dispatch({ type: FETCH_RESOURCES_REQUEST });
    fetch(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((response) => dispatch({ type: FETCH_RESOURCES_SUCCESS, payload: response.resources }))
      .catch((error) => dispatch({ type: FETCH_RESOURCES_FAILURE, payload: error }));
  };
}

export function updateResources() {
  return ({
    type: UPDATE_RESOURCES,
  });
}
