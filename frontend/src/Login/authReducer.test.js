import reducer from './authReducer';
import * as actionCreator from './actionCreator';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      { isLoggedIn: false },
    );
  });

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {
        type: actionCreator.FORGOT_PASSWORD,
      }),
    ).toEqual(
      { isLoggedIn: false },
    );
  });

  it('should handle LOGIN', () => {
    expect(
      reducer({ isLoggedIn: false }, {
        type: actionCreator.LOGIN,
      }),
    ).toEqual(
      { isLoggedIn: true },
    );
  });
});
