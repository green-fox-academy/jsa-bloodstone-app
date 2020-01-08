import { SERVER_URL } from 'react-native-dotenv';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actionCreator from './actionCreator';

const URL = `http://${SERVER_URL}/kingdom/resources`;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('resources actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_RESOURCES_SUCCESS when fetching resources has been done', () => {
    fetchMock.getOnce(URL, {
      body: { resources: ['test'] },
      headers: { 'content-type': 'application/json' },
    });
    const expectedActions = [
      { type: actionCreator.FETCH_RESOURCES_REQUEST },
      {
        type: actionCreator.FETCH_RESOURCES_SUCCESS,
        payload: ['test'],
      },
    ];
    const store = mockStore();
    return store.dispatch(actionCreator.fetchResources()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_RESOURCES_FAILURE when fetching resources failed', () => {
    fetchMock.getOnce(URL, {
      status: 404,
    });
    const expectedActions = [
      { type: actionCreator.FETCH_RESOURCES_REQUEST },
      {
        type: actionCreator.FETCH_RESOURCES_FAILURE,
        payload: new Error('An error has occurred, please try later!'),
      },
    ];
    const store = mockStore();
    return store.dispatch(actionCreator.fetchResources()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
