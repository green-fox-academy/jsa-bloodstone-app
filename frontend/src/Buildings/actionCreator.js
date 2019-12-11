export const FETCHSTART = 'fetchStart';
export const FETCHSUCCESS = 'fetchSuccess';
export const FETCHERROR = 'fetchError';

export function fetchStart() {
  return {
    type: FETCHSTART,
  };
}

export function fetchSuccess(state) {
  return {
    type: FETCHSUCCESS,
    payload: state,
  };
}

export function fetchError(error) {
  return {
    type: FETCHERROR,
    payload: error,
  };
}

export function fetching() {
  return (dispatch) => {
    dispatch(fetchStart());
    fetch('http://10.72.160.229:4000/kingdom/buildings') // Need Modify URL
      .then((response) => response.json())
      .then((response) => dispatch(fetchSuccess(response.buildings)));
  };
}
