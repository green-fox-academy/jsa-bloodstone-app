import {
  FETCH_ONE_BUILDING_REQUEST,
  FETCH_ONE_BUILDING_SUCCESS,
  FETCH_ONE_BUILDING_FAILURE,
} from './actionCreator';

const initialState = {
  oneBuildingInfo: [],
  isLoading: false,
  error: undefined,
};

export default function buildings(state = initialState, action) {
  switch (action.type) {
    case FETCH_ONE_BUILDING_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ONE_BUILDING_SUCCESS:
      return { ...state, oneBuildingInfo: action.payload, isLoading: false };
    case FETCH_ONE_BUILDING_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}