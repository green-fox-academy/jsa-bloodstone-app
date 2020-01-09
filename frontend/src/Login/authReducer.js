import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORGOT_PASSWORD,
} from './actionCreator';

const initialState = {
  isLoading: false,
  token: '',
  message: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, message: action.payload.message };
    case FORGOT_PASSWORD:
      return state;
    default:
      return state;
  }
}
