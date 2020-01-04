import {
  LOGIN,
  FORGOT_PASSWORD,
} from './actionCreator';

const initialState = {
  isLoggedIn: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case FORGOT_PASSWORD:
      return state;
    default:
      return state;
  }
}
