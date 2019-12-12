import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_START = 'fetchStart';
export const FETCH_BUILDINGS = 'fetchBuildings';
export const FETCH_ERROR = 'fetchError';

export function fetchBuildings() {
  const url = `http://${SERVER_URL}/kingdom/buildings`;
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Unexpected status');
      })
      .then((response) => dispatch({ type: FETCH_BUILDINGS, payload: response.buildings }))
      .catch((error) => dispatch({ type: FETCH_ERROR, payload: error.message }));
  };
}
