import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from './actionCreator';

const initialState = {
  isLoading: false,
  isRegistered: false,
  error: undefined,
};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return { ...state, isLoading: true };
    case REGISTRATION_SUCCESS:
      return { ...state, isRegistered: true };
    case REGISTRATION_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
