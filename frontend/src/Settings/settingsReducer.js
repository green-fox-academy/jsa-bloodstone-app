import {
  CHANGE_SETTINGS_REQUEST,
  CHANGE_SETTINGS_SUCCESS,
  CHANGE_SETTINGS_FAILURE,
} from './actionCreator';

const initialState = {
  changes: [],
  isLoading: false,
  error: undefined,
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SETTINGS_REQUEST:
      return { ...state, isLoading: true };
    case CHANGE_SETTINGS_SUCCESS:
      return {
        ...state,
        changes: action.payload.changes,
        isLoading: false,
      };
    case CHANGE_SETTINGS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
