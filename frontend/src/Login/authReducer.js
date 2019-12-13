import { LOGIN } from './actionCreator';

const defaultState = {
  isLogin: false,
};

export default function auth(state = defaultState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true };
    default:
      return state;
  }
}
