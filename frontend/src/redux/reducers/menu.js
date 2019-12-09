import { SWITCH_MENU } from '../actionCreator';

export default function menu(state, action) {
  switch (action.type) {
    case SWITCH_MENU:
      return action.payload;
    default:
      return 'Buildings';
  }
}
