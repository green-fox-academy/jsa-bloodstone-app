export const LOGIN = 'login';
export const FORGOT_PASSWORD_USERNAME = 'forgotPasswordUsername';
export const FORGOT_PASSWORD_EMAIL = 'forgotPasswordEmail';
export const FORGOT_PASSWORD_INVALID_ENTER = 'forgotPasswordInvalidEnter';

export function login() {
  return {
    type: LOGIN,
  };
}
