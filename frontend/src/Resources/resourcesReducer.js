import {
  FETCH_RESOURCES_REQUEST,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_FAILURE,
  ADD_BUILDING_SUCCESS,
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
        foodAmount: action.payload[0].amount,
        foodGeneration: action.payload[0].generation,
        goldAmount: action.payload[1].amount,
        goldGeneration: action.payload[1].generation,
        isLoading: false,
        error: undefined,
      };
    case ADD_BUILDING_SUCCESS:
      return {
        ...state,
        foodAmount: action.payload.currentResource[0].amount,
        goldAmount: action.payload.currentResource[1].amount,
        isLoading: false,
        error: undefined,
      };
    case FETCH_RESOURCES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
