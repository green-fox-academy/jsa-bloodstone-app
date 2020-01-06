import reducer from './resourcesReducer';
import * as actionCreator from './actionCreator';

describe('resources reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        foodAmount: 0,
        foodGeneration: 0,
        goldAmount: 0,
        goldGeneration: 0,
        isLoading: false,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_RESOURCES_REQUEST', () => {
    expect(
      reducer(
        {
          foodAmount: 0,
          foodGeneration: 0,
          goldAmount: 0,
          goldGeneration: 0,
          isLoading: false,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_RESOURCES_REQUEST,
        },
      ),
    ).toEqual(
      {
        foodAmount: 0,
        foodGeneration: 0,
        goldAmount: 0,
        goldGeneration: 0,
        isLoading: true,
        error: undefined,
      },
    );
  });

  it('should handle FETCH_RESOURCES_SUCCESS', () => {
    expect(
      reducer(
        {
          foodAmount: 0,
          foodGeneration: 0,
          goldAmount: 0,
          goldGeneration: 0,
          isLoading: true,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_RESOURCES_SUCCESS,
          payload: [{ amount: 100, generation: 60 }, { amount: 100, generation: 60 }],
        },
      ),
    ).toEqual(
      {
        foodAmount: 100,
        foodGeneration: 60,
        goldAmount: 100,
        goldGeneration: 60,
        isLoading: false,
        error: undefined,
      },
    );
  });
  it('should handle FETCH_RESOURCES_FAILURE', () => {
    expect(
      reducer(
        {
          foodAmount: 0,
          foodGeneration: 0,
          goldAmount: 0,
          goldGeneration: 0,
          isLoading: true,
          error: undefined,
        },
        {
          type: actionCreator.FETCH_RESOURCES_FAILURE,
          payload: new Error('test'),
        },
      ),
    ).toEqual(
      {
        foodAmount: 0,
        foodGeneration: 0,
        goldAmount: 0,
        goldGeneration: 0,
        isLoading: false,
        error: new Error('test'),
      },
    );
  });
});
