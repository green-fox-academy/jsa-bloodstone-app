import {
  FETCH_BUILDINGS_REQUEST,
  FETCH_BUILDINGS_SUCCESS,
  FETCH_BUILDINGS_FAILURE,
  ADD_FARM,
  ADD_MINE,
  ADD_ACADEMY,
} from './actionCreator';

const initialState = {
  listOfBuildings: [],
  isLoading: false,
  error: undefined,
};

export default function buildings(state = initialState, action) {
  switch (action.type) {
    case FETCH_BUILDINGS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_BUILDINGS_SUCCESS:
      return { ...state, listOfBuildings: action.payload, isLoading: false };
    case FETCH_BUILDINGS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case ADD_FARM:
    case ADD_MINE:
    case ADD_ACADEMY:
      return { ...state, listOfBuildings: [...state.listOfBuildings, action.payload] };
    default:
      return state;
  }
}
