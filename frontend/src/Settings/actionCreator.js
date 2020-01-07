import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_SETTINGS_REQUEST = 'fetchSettingsRequest';
export const FETCH_SETTINGS_SUCCESS = 'fetchSettingsSuccess';
export const FETCH_SETTINGS_FAILURE = 'fetchSettingsFailure';

const URL = `http://${SERVER_URL}/kingdom/settings`;

export function fetchSettings() {
  return (dispatch) => {
    dispatch({ type: FETCH_SETTINGS_REQUEST });
    fetch(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((response) => dispatch({ type: FETCH_SETTINGS_SUCCESS, payload: response.settings }))
      .catch((error) => dispatch({ type: FETCH_SETTINGS_FAILURE, payload: error }));
  };
}
