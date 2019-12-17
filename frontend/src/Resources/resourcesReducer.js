import { FETCH_RESOURCES_REQUEST, FETCH_RESOURCES_SUCCESS, FETCH_RESOURCES_FAILURE } from './actionCreator';

const initialState = {
  food: 0,
  foodGeneration: 0,
  gold: 0,
  goldGeneration: 0,
  isLoading: false,
  error: undefined,
};

export default function resources(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESOURCES_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_RESOURCES_SUCCESS:
      return {
        ...state,
        food: action.payload[0].amount,
        foodGeneration: action.payload[0].generation,
        gold: action.payload[1].amount,
        goldGeneration: action.payload[1].generation,
        isLoading: false,
      };
    case FETCH_RESOURCES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
