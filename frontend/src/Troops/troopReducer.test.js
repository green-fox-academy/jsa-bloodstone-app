import reducer from './troopReducer';
import * as actionCreator from './actionCreator';

describe('troops reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        infoOfTroops: {},
        isLoading: false,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_TROOPS_REQUEST', () => {
    expect(
      reducer(
        {
          infoOfTroops: {},
          isLoading: false,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_TROOPS_REQUEST,
        },
      ),
    ).toEqual(
      {
        infoOfTroops: {},
        isLoading: true,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_TROOPS_SUCCESS', () => {
    expect(
      reducer(
        {
          infoOfTroops: {},
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
        infoOfTroops: ['test'],
        isLoading: false,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_TROOPS_FAILURE', () => {
    expect(
      reducer(
        {
          infoOfTroops: {},
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
        infoOfTroops: {},
        isLoading: false,
        error: new Error('test'),
      },
    );
  });
});
