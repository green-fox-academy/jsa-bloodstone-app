import {
  FETCH_RESOURCES_REQUEST, FETCH_RESOURCES_SUCCESS, FETCH_RESOURCES_FAILURE,
  UPDATE_RESOURCE,
} from './actionCreator';

const initialState = {
  foodAmount: 0,
  foodGeneration: 0,
  goldAmount: 0,
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
        foodAmount: 200,
        foodGeneration: action.payload[0].generation,
        goldAmount: 200,
        goldGeneration: action.payload[1].generation,
        isLoading: false,
        error: undefined,
      };
    case FETCH_RESOURCES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case UPDATE_RESOURCE:
      return {
        ...state,
        foodAmount: state.foodAmount + state.foodGeneration,
        goldAmount: state.goldAmount + state.goldGeneration,
      };
    default:
      return state;
  }
}
