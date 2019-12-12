import { FETCH_TROOPS, FETCH_START, FETCH_ERROR } from './actionCreator';

const initState = {
  troops: [],
  isLoading: true,
  fetchError: null,
};

export default function troop(state = initState, action) {
  switch (action.type) {
    case FETCH_TROOPS:
      return { troops: action.payload, isLoading: false, fetchError: null };
    case FETCH_START:
      return { troops: [], isLoading: true, fetchError: null };
    case FETCH_ERROR:
      return { troops: [], isLoading: false, fetchError: action.payload };
    default:
      return state;
  }
}
