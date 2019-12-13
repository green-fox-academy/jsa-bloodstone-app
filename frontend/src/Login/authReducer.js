import { LOGIN } from './actionCreator';

const initialState = {
  isLoggedIn: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
}
