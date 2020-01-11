import { SERVER_URL } from 'react-native-dotenv';

export const LOGIN_REQUEST = 'loginRequest';
export const LOGIN_SUCCESS = 'loginSuccess';
export const LOGIN_FAILURE = 'loginFailure';
export const FORGOT_PASSWORD = 'forgotPassword';
export const LOGOUT = 'logout';


const URL = `http://${SERVER_URL}/users/login`;

export function login(username, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((response) => dispatch({ type: LOGIN_SUCCESS, payload: response.token }))
      .catch((error) => dispatch({ type: LOGIN_FAILURE, payload: error }));
  };
}

export function forgotPassword(input) {
  return {
    type: FORGOT_PASSWORD,
    payload: input,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
