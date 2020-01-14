import reducer from './authReducer';
import * as actionCreator from './actionCreator';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLoading: false,
        token: undefined,
        error: undefined,
      },
    );
  });

  it('should handle LOGIN', () => {
    expect(
      reducer({
        isLoading: false,
        token: undefined,
        error: undefined,
      }, {
        type: actionCreator.LOGIN_SUCCESS,
      }),
    ).toEqual(
      {
        isLoading: false,
        token: undefined,
        error: undefined,
      },
    );
  });
});
