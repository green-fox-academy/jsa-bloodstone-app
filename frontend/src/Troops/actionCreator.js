import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_TROOPS_SUCCESS = 'fetchTroopsSuccess';
export const FETCH_TROOPS_REQUEST = 'fetchTroopsRequest';
export const FETCH_TROOPS_FAILURE = 'fetchTroopsFailure';
export const CREATE_TROOP_SUCCESS = 'createTroopSuccess';
export const CREATE_TROOP_REQUEST = 'createTroopRequest';
export const CREATE_TROOP_FAILURE = 'createTroopFailure';

const URL = `http://${SERVER_URL}/kingdom/troops`;

export function fetchTroops(token) {
  return (dispatch) => {
    dispatch({ type: FETCH_TROOPS_REQUEST });
    return fetch(URL, {
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
      .then((response) => dispatch({ type: FETCH_TROOPS_SUCCESS, payload: response.troops }))
      .catch((error) => dispatch({ type: FETCH_TROOPS_FAILURE, payload: error }));
  };
}

export function createTroop(level, token) {
  return (dispatch) => {
    dispatch({ type: CREATE_TROOP_REQUEST });
    return fetch(`${URL}?level=${level}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 400) {
          return dispatch({ type: CREATE_TROOP_FAILURE, payload: response });
        }
        if (response.status === 201) {
          return dispatch({ type: CREATE_TROOP_SUCCESS, payload: response.troops });
        }
        return null;
      })
      .catch((error) => dispatch({ type: CREATE_TROOP_FAILURE, payload: error }));
  };
}
