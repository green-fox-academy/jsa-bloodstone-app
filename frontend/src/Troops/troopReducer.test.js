import reducer from './troopReducer';
import * as actionCreator from './actionCreator';

describe('troops reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        listOfTroops: [],
        isLoading: false,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_TROOPS_REQUEST', () => {
    expect(
      reducer(
        {
          listOfTroops: [],
          isLoading: false,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_TROOPS_REQUEST,
        },
      ),
    ).toEqual(
      {
        listOfTroops: [],
        isLoading: true,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_TROOPS_SUCCESS', () => {
    expect(
      reducer(
        {
          listOfTroops: [],
          isLoading: true,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_TROOPS_SUCCESS,
          payload: ['test'],
        },
      ),
    ).toEqual(
      {
        listOfTroops: ['test'],
        isLoading: false,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_TROOPS_FAILURE', () => {
    expect(
      reducer(
        {
          listOfTroops: [],
          isLoading: true,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_TROOPS_FAILURE,
          payload: new Error('test'),
        },
      ),
    ).toEqual(
      {
        listOfTroops: [],
        isLoading: false,
        error: new Error('test'),
      },
    );
  });
});
