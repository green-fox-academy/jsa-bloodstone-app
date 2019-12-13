import {
  FETCH_BUILDINGS_REQUEST,
  FETCH_BUILDINGS_SUCCESS,
  FETCH_BUILDINGS_FAILURE,
} from './actionCreator';

const initialState = {
  listOfBuildings: [],
  isLoading: false,
  error: undefined,
};

export default function buildings(state = initialState, action) {
  switch (action.type) {
    case FETCH_BUILDINGS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_BUILDINGS_SUCCESS:
      return { ...state, listOfBuildings: action.payload, isLoading: false };
    case FETCH_BUILDINGS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
