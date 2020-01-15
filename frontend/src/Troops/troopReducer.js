import {
  FETCH_TROOPS_SUCCESS, FETCH_TROOPS_REQUEST, FETCH_TROOPS_FAILURE,
  CREATE_TROOP_SUCCESS, CREATE_TROOP_REQUEST,
} from './actionCreator';

const initialState = {
  listOfTroops: [],
  isLoading: false,
  error: undefined,
};

export default function troops(state = initialState, action) {
  switch (action.type) {
    case FETCH_TROOPS_REQUEST:
    case CREATE_TROOP_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TROOPS_SUCCESS:
    case CREATE_TROOP_SUCCESS:
      return {
        ...state, listOfTroops: action.payload, isLoading: false, error: undefined,
      };
    case FETCH_TROOPS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
