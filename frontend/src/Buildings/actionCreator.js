import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_START = 'fetchStart';
export const FETCH_SUCCESS = 'fetchSuccess';
export const FETCH_ERROR = 'fetchError';

export function fetchStart() {
  return {
    type: FETCH_START,
  };
}

export function fetchSuccess(state) {
  return {
    type: FETCH_SUCCESS,
    payload: state,
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
}

export function fetching() {
  return (dispatch) => {
    dispatch(fetchStart());
    fetch(`http://${SERVER_URL}/kingdom/buildings`)
      .then((response) => response.json())
      .then((response) => dispatch(fetchSuccess(response.buildings)));
  };
}
