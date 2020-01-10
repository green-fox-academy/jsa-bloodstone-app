import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORGOT_PASSWORD,
  LOGOUT,
} from './actionCreator';

const initialState = {
  isLoading: false,
  token: undefined,
  error: undefined,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state, isLoading: false, token: action.payload, error: undefined,
      };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case FORGOT_PASSWORD:
      return state;
    case LOGOUT:
      return { ...state, token: undefined };
    default:
      return state;
  }
}
