import {
  LOGIN,
  FORGOT_PASSWORD_INVALID_ENTER,
  FORGOT_PASSWORD_EMAIL,
  FORGOT_PASSWORD_USERNAME,
} from './actionCreator';

const initialState = {
  isLoggedIn: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case FORGOT_PASSWORD_INVALID_ENTER:
      return { ...state, error: 'Please reenter a valid email or username' };
    case FORGOT_PASSWORD_EMAIL:
      return { ...state, error: undefined };
    case FORGOT_PASSWORD_USERNAME:
      return { ...state, error: undefined };
    default:
      return state;
  }
}
