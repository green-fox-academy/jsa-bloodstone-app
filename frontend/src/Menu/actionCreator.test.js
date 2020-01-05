import * as actionCreator from './actionCreator';

describe('menu actions', () => {
  it('creates CHANGE_DISPLAYED_COMPONENT when change displayed component has been done', () => {
    const pageSelected = 'Buildings';
    const expectedAction = {
      type: actionCreator.CHANGE_DISPLAYED_COMPONENT,
      payload: pageSelected,
    };
    expect(actionCreator.changeDisplayedComponent(pageSelected)).toEqual(expectedAction);
  });
});
