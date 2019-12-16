import { FETCH_TROOPS_SUCCESS, FETCH_TROOPS_REQUEST, FETCH_TROOPS_FAILURE } from './actionCreator';

const initialState = {
  listOfTroops: [],
  isLoading: false,
  error: undefined,
};

export default function troops(state = initialState, action) {
  switch (action.type) {
    case FETCH_TROOPS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TROOPS_SUCCESS:
      return { ...state, listOfTroops: action.payload, isLoading: false };
    case FETCH_TROOPS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
