import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_TROOPS_SUCCESS = 'fetchTroopsSuccess';
export const FETCH_TROOPS_REQUEST = 'fetchTroopsRequest';
export const FETCH_TROOPS_FAILURE = 'fetchTroopsFailure';

const URL = `http://${SERVER_URL}/kingdom/troops/`;

export function fetchTroops() {
  return (dispatch) => {
    dispatch({ type: FETCH_TROOPS_REQUEST });
    fetch(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('An error has occurred, please try later!');
      })
      .then((response) => dispatch({ type: FETCH_TROOPS_SUCCESS, payload: response.troops }))
      .catch((error) => dispatch({ type: FETCH_TROOPS_FAILURE, payload: error }));
  };
}
