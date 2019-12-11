export const FETCH_TROOPS = 'fetchTroops';

export function fetchTroops() {
  const url = 'http://10.72.161.24:4000/kingdom/troops';
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((resObj) => dispatch({ type: FETCH_TROOPS, payload: resObj.troops }));
  };
}
