import { CHANGE_DIAPLAYED_COMPONENT } from './actionCreator';

const initialState = {
  currentlyDisplayComponent: 'Buildings',
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DIAPLAYED_COMPONENT:
      return { ...state, currentlyDisplayComponent: action.payload };
    default:
      return { ...state, currentlyDisplayComponent: 'Buildings' };
  }
}
