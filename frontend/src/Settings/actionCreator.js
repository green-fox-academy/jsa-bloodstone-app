import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_SETTINGS_REQUEST = 'fetchSettingsRequest';
export const FETCH_SETTINGS_SUCCESS = 'fetchSettingsSuccess';
export const FETCH_SETTINGS_FAILURE = 'fetchSettingsFailure';

const FETCH_SETTINGS_URL = `http://${SERVER_URL}/kingdom/settings`;

// mocked fetch
export function fetchSettings() {
  return (dispatch) => {
    dispatch({ type: FETCH_SETTINGS_REQUEST });
    fetch(FETCH_SETTINGS_URL)
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

export const CHANGE_SETTINGS_REQUEST = 'changeSettingsRequest';
export const CHANGE_SETTINGS_SUCCESS = 'changeSettingsSuccess';
export const CHANGE_SETTINGS_FAILURE = 'changeSettingsFailure';

const CHANGE_SETTINGS_URL = `http://${SERVER_URL}/kingdom/settings`;

export function changeSettings(settings) {
  return (dispatch) => {
    dispatch({ type: CHANGE_SETTINGS_REQUEST });
    fetch(CHANGE_SETTINGS_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(response.status);
    })
      .then((response) => dispatch({ type: CHANGE_SETTINGS_SUCCESS, payload: response.settings }))
      .catch((error) => dispatch({ type: CHANGE_SETTINGS_FAILURE, payload: error }));
  };
}
