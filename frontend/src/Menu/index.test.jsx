import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Menu from '.';

jest.mock('react-redux');
jest.mock('./actionCreator');

describe('<Menu />', () => {
  it('Should render menu and match the snapshot', () => {
    const renderer = new ShallowRenderer();
    const component = renderer.render(<Menu />);
    expect(component).toMatchSnapshot();
  });
});
