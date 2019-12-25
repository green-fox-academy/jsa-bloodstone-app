import {
  FETCH_ONE_BUILDING_REQUEST,
  FETCH_ONE_BUILDING_SUCCESS,
  FETCH_ONE_BUILDING_FAILURE,
} from './actionCreator';

const initialState = {
  oneBuildingInfo: null,
  isLoading: false,
  error: undefined,
};

export default function oneBuilding(state = initialState, action) {
  switch (action.type) {
    case FETCH_ONE_BUILDING_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ONE_BUILDING_SUCCESS:
      return {
        ...state, oneBuildingInfo: action.payload, isLoading: false, error: undefined,
      };
    case FETCH_ONE_BUILDING_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
