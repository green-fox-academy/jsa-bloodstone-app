import * as actionCreator from './actionCreator';

describe('login actions', () => {
  it('creates LOGIN when login has been done', () => {
    const expectedAction = {
      type: actionCreator.LOGIN,
    };
    expect(actionCreator.login()).toEqual(expectedAction);
  });
});
