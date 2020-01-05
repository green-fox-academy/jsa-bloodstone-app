import React from 'react';
import renderer from 'react-test-renderer';

import MenuItem from './MenuItem';

jest.mock('react-redux');
jest.mock('./actionCreator');

describe('<MenuItem />', () => {
  it('Should render buildings and match the snapshot', () => {
    const component = renderer.create(<MenuItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
