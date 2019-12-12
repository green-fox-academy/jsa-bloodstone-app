import { SERVER_URL } from 'react-native-dotenv';

export const FETCH_TROOPS_SUCCEED = 'fetchTroopsSucceed';
export const FETCH_TROOPS_START = 'fetchTroopsStart';
export const FETCH_TROOPS_ERROR = 'fetchTroopsError';

const URL = `http://${SERVER_URL}/kingdom/troops`;

export function fetchTroops() {

  return (dispatch) => {
    dispatch({ type: FETCH_TROOPS_START });
    fetch(URL)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error(res.status);
      })
      .then((resObj) => dispatch({ type: FETCH_TROOPS_SUCCEED, payload: resObj.troops }))
      .catch((err) => dispatch({ type: FETCH_TROOPS_ERROR, payload: err }));
  };
}
