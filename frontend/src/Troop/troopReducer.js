import { FETCH_TROOPS_SUCCEED, FETCH_TROOPS_START, FETCH_TROOPS_ERROR } from './actionCreator';

const initState = {
  troops: [],
  isLoading: false,
  fetchError: undefined,
};

export default function troop(state = initState, action) {
  switch (action.type) {
    case FETCH_TROOPS_SUCCEED:
      return { ...state, troops: action.payload, isLoading: false };
    case FETCH_TROOPS_START:
      return { ...state, isLoading: true };
    case FETCH_TROOPS_ERROR:
      return { ...state, fetchError: action.payload };
    default:
      return state;
  }
}
