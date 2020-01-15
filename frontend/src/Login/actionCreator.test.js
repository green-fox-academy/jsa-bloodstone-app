import * as actionCreator from './actionCreator';

describe('login actions', () => {
  it('creates LOGIN when login has been done', () => {
    expect(actionCreator.login()).toEqual(expect.any(Function));
  });

  it('creates FORGOT_PASSWORD when forgotPassword has been done', () => {
    const input = 'test';
    const expectedAction = {
      type: actionCreator.FORGOT_PASSWORD,
      payload: input,
    };
    expect(actionCreator.forgotPassword(input)).toEqual(expectedAction);
  });
});
