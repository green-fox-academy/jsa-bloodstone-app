import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './actionCreator';

const initialState = {
  buildingsInfo: [],
  message: '',
};

export default function buildings(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, message: 'loading' };
    case FETCH_SUCCESS:
      return { buildingsInfo: action.payload, message: 'success' };
    case FETCH_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
