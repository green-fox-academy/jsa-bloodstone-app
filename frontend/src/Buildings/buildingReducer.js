import { FETCHSTART, FETCHSUCCESS, FETCHERROR } from './actionCreator';

const initialState = {
  buildingsInfo: [],
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHSTART:
      return { ...state, message: 'loading' };
    case FETCHSUCCESS:
      return { buildingsInfo: action.payload, message: 'success' };
    case FETCHERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
