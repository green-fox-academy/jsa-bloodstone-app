import { FETCH_BUILDINGS_START, FETCH_BUILDINGS_SUCCESS, FETCH_BUILDINGS_ERROR } from './actionCreator';

const initialState = {
  buildingsInfo: [],
  isLoading: false,
  error: '',
};

export default function buildings(state = initialState, action) {
  switch (action.type) {
    case FETCH_BUILDINGS_START:
      return { ...state, isLoading: true };
    case FETCH_BUILDINGS_SUCCESS:
      return { ...state, buildingsInfo: action.payload, isLoading: false };
    case FETCH_BUILDINGS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
