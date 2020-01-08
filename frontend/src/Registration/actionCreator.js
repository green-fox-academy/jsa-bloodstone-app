import { SERVER_URL } from 'react-native-dotenv';

export const REGISTRATION_REQUEST = 'registrationRequest';
export const REGISTRATION_SUCCESS = 'registrationSuccess';
export const REGISTRATION_FAILURE = 'registrationFailure';

// for the backend connection in the future
const URL = `http://${SERVER_URL}/registration`;

export function registration() {
  return (dispatch) => {
    dispatch({ type: REGISTRATION_REQUEST });
    fetch(URL)
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        throw new Error('An error has occurred, please try later!');
      })
      .then(() => dispatch({ type: REGISTRATION_SUCCESS }))
      .catch((error) => dispatch({ type: REGISTRATION_FAILURE, payload: error }));
  };
}

export function registrationSuccess() {
  return {
    type: REGISTRATION_SUCCESS,
  };
}
