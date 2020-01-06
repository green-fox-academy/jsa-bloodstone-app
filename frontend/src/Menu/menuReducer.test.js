import reducer from './menuReducer';
import * as actionCreator from './actionCreator';

describe('menu reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      { currentlyDisplayComponent: 'Buildings' },
    );
  });

  it('should handle CHANGE_DISPLAYED_COMPONENT', () => {
    expect(
      reducer({ currentlyDisplayComponent: 'Buildings' }, {
        type: actionCreator.CHANGE_DISPLAYED_COMPONENT,
        payload: 'test',
      }),
    ).toEqual(
      { currentlyDisplayComponent: 'test' },
    );
  });
});
