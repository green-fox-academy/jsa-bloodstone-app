import { FETCH_TROOPS } from './actionCreator';

const initState = {
  troops: [],
};

export default function troop(state = initState, action) {
  switch (action.type) {
    case FETCH_TROOPS:
      return { troops: action.payload };
    default:
      return state;
  }
}
