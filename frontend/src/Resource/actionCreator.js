import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_RESOURCE_SUCCESS = 'fetchTroopsSuccess';
export const FETCH_RESOURCE_REQUEST = 'fetchTroopsRequest';
export const FETCH_RESOURCE_FAILURE = 'fetchTroopsFailure';

const URL = `http://${SERVER_URL}/kingdom/troops`;

export function fetchTroops() {
  return (dispatch) => {
    dispatch({ type: FETCH_RESOURCE_REQUEST });
    fetch(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((response) => dispatch({ type: FETCH_RESOURCE_SUCCESS, payload: response.troops }))
      .catch((error) => dispatch({ type: FETCH_RESOURCE_FAILURE, payload: error }));
  };
}
