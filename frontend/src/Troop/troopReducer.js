import { FETCH_TROOPS_SUCCEED, FETCH_TROOPS_START, FETCH_TROOPS_ERROR } from './actionCreator';

const initState = {
  troops: [],
  isLoading: false,
  fetchError: null,
};

export default function troop(state = initState, action) {
  switch (action.type) {
    case FETCH_TROOPS_SUCCEED:
      return { troops: action.payload, isLoading: false, fetchError: null };
    case FETCH_TROOPS_START:
      return { troops: [], isLoading: true, fetchError: null };
    case FETCH_TROOPS_ERROR:
      return { troops: [], isLoading: false, fetchError: action.payload };
    default:
      return state;
  }
}
