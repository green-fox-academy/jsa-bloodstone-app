import { FETCH_START, FETCH_BUILDINGS, FETCH_ERROR } from './actionCreator';

const initialState = {
  buildingsInfo: [],
  loading: false,
  error: '',
};

export default function buildings(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_BUILDINGS:
      return { ...state, buildingsInfo: action.payload, loading: false };
    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
