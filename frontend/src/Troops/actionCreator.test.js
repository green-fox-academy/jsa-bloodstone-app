import { SERVER_URL } from 'react-native-dotenv';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actionCreator from './actionCreator';

const URL = `http://${SERVER_URL}/kingdom/troops`;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('troops actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_TROOPS_SUCCESS when fetching troops has been done', () => {
    fetchMock.getOnce(URL, {
      body: { troops: ['test'] },
      headers: { 'content-type': 'application/json' },
    });
    const expectedActions = [
      { type: actionCreator.FETCH_TROOPS_REQUEST },
      { type: actionCreator.FETCH_TROOPS_SUCCESS, payload: ['test'] },
    ];
    const store = mockStore();
    return store.dispatch(actionCreator.fetchTroops()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_TROOPS_FAILURE when fetching troops failed', () => {
    fetchMock.getOnce(URL, {
      status: 404,
    });
    const expectedActions = [
      { type: actionCreator.FETCH_TROOPS_REQUEST },
      {
        type: actionCreator.FETCH_TROOPS_FAILURE,
        payload: new Error('An error has occurred, please try later!'),
      },
    ];
    const store = mockStore();
    return store.dispatch(actionCreator.fetchTroops()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
