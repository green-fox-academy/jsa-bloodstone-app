import {
  FETCH_RESOURCES_REQUEST, FETCH_RESOURCES_SUCCESS, FETCH_RESOURCES_FAILURE,
  UPDATE_RESOURCES,
} from './actionCreator';

const initialState = {
  foodAmount: 0,
  foodInitialAmount: 0,
  foodGeneration: 0,
  foodUpdatedAt: 0,

  goldAmount: 0,
  goldInitialAmount: 0,
  goldGeneration: 0,
  goldUpdatedAt: 0,

  isLoading: false,
  error: undefined,
};

function getResourceAmount(initialAmount, generation, updatedAt) {
  const date = new Date();
  const minutesPassed = (date.getTime() - updatedAt) / 60000;
  return Math.round(initialAmount + generation * minutesPassed);
}

export default function resources(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESOURCES_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_RESOURCES_SUCCESS:
      return {
        ...state,

        foodAmount: getResourceAmount(
          action.payload[0].amount,
          action.payload[0].generation,
          action.payload[0].updatedAt,
        ),
        foodInitialAmount: action.payload[0].amount,
        foodGeneration: action.payload[0].generation,
        foodUpdatedAt: action.payload[0].updatedAt,

        goldAmount: getResourceAmount(
          action.payload[1].amount,
          action.payload[1].generation,
          action.payload[1].updatedAt,
        ),
        goldInitialAmount: action.payload[1].amount,
        goldGeneration: action.payload[1].generation,
        goldUpdatedAt: action.payload[1].updatedAt,

        isLoading: false,
      };
    case FETCH_RESOURCES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case UPDATE_RESOURCES:
      return {
        ...state,
        foodAmount: getResourceAmount(
          state.foodInitialAmount,
          state.foodGeneration,
          state.foodUpdatedAt,
        ),
        goldAmount: getResourceAmount(
          state.goldInitialAmount,
          state.goldGeneration,
          state.goldUpdatedAt,
        ),
      };
    default:
      return state;
  }
}
