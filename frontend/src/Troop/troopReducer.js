import { FETCH_TROOPS_SUCCESS, FETCH_TROOPS_REQUEST, FETCH_TROOPS_FAILURE } from './actionCreator';

const initialState = {
  troops: [],
  isLoading: false,
  error: undefined,
};

export default function troop(state = initialState, action) {
  switch (action.type) {
    case FETCH_TROOPS_SUCCESS:
      return { ...state, troops: action.payload, isLoading: false };
    case FETCH_TROOPS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TROOPS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
