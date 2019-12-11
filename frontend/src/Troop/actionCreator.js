export const FETCH_TROOPS = 'fetchTroops';

export function fetchTroops() {
  return (dispatch) => {
    fetch('https://stream-vanadium.glitch.me/messages')
      .then((res) => res.json())
      .then((resObj) => dispatch({ type: FETCH_TROOPS, payload: resObj.troops }));
  };
}
