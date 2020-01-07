import React from 'react';
import renderer from 'react-test-renderer';

import Menu from '.';

jest.mock('react-redux');
jest.mock('./actionCreator');

describe('<Menu />', () => {
  it('Should render menu and match the snapshot', () => {
    const component = renderer.create(<Menu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
