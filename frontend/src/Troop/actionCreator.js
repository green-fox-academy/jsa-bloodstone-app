export const FETCH_TROOPS = 'fetchTroops';
export const FETCH_START = 'fetchStart';
export const FETCH_ERROR = 'fetchError';

export function fetchTroops() {
  const url = 'http://10.72.161.24:4000/kingdom/troops';
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error(res.status);
      })
      .then((resObj) => dispatch({ type: FETCH_TROOPS, payload: resObj.troops }))
      .catch((err) => dispatch({ type: FETCH_ERROR, payload: err }));
  };
}
