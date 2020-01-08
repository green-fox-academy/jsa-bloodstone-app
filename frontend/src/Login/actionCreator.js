export const LOGIN = 'login';
export const FORGOT_PASSWORD = 'forgotPassword';

export function login() {
  return {
    type: LOGIN,
  };
}

export function forgotPassword(input) {
  return {
    type: FORGOT_PASSWORD,
    payload: input,
  };
}
