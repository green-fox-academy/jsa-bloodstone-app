import { FETCH_RESOURCE_SUCCESS, FETCH_RESOURCE_REQUEST, FETCH_RESOURCE_FAILURE } from './actionCreator';

const initialState = {
  food: 0,
  gold: 0,
  isLoading: false,
  error: undefined,
};

export default function troops(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESOURCE_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_RESOURCE_SUCCESS:
      return {
        ...state,
        food: action.payload.food,
        gold: action.payload.gold,
        isLoading: false,
      };
    case FETCH_RESOURCE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
