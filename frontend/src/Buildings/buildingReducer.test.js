import reducer from './buildingReducer';
import * as actionCreator from './actionCreator';

describe('buildings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        listOfBuildings: [],
        isLoading: false,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_BUILDINGS_REQUEST', () => {
    expect(
      reducer(
        {
          listOfBuildings: [],
          isLoading: false,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_BUILDINGS_REQUEST,
        },
      ),
    ).toEqual(
      {
        listOfBuildings: [],
        isLoading: true,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_BUILDINGS_SUCCESS', () => {
    expect(
      reducer(
        {
          listOfBuildings: [],
          isLoading: true,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_BUILDINGS_SUCCESS,
          payload: ['test'],
        },
      ),
    ).toEqual(
      {
        listOfBuildings: ['test'],
        isLoading: false,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_BUILDINGS_FAILURE', () => {
    expect(
      reducer(
        {
          listOfBuildings: [],
          isLoading: true,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_BUILDINGS_FAILURE,
          payload: new Error('test'),
        },
      ),
    ).toEqual(
      {
        listOfBuildings: [],
        isLoading: false,
        error: new Error('test'),
      },
    );
  });
});
