import { SERVER_URL } from 'react-native-dotenv';

export const CHANGE_SETTINGS_REQUEST = 'changeSettingsRequest';
export const CHANGE_SETTINGS_SUCCESS = 'changeSettingsSuccess';
export const CHANGE_SETTINGS_FAILURE = 'changeSettingsFailure';

const URL = `http://${SERVER_URL}/kingdom/settings`;

export function changeSettings(settings, token) {
  console.log(settings);
  return (dispatch) => {
    dispatch({ type: CHANGE_SETTINGS_REQUEST });
    return fetch(URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(settings),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 400) {
          return dispatch({ type: CHANGE_SETTINGS_FAILURE, payload: response.message });
        }
        if (response.status === 202) {
          return dispatch({ type: CHANGE_SETTINGS_SUCCESS, payload: response.changes });
        }
        throw new Error(response.status);
      })
      .catch((error) => dispatch({ type: CHANGE_SETTINGS_FAILURE, payload: error }));
  };
}
