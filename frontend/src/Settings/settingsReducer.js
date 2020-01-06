import {
  FETCH_SETTINGS_REQUEST, FETCH_SETTINGS_SUCCESS, FETCH_SETTINGS_FAILURE,
} from './actionCreator';

const initialState = {
  email: 'example@email.com',
  username: 'example name',
  kingdomName: 'your kingdom\'s name',
  isLoading: false,
  error: undefined,
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case FETCH_SETTINGS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        kingdomName: action.payload.kingdomName,
        isLoading: false,
      };
    case FETCH_SETTINGS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
