import React from 'react';
import renderer from 'react-test-renderer';

import TroopLevel from './TroopLevel';

jest.mock('react-redux');
jest.mock('./actionCreator');

describe('<TroopLevel />', () => {
  it('Should render buildings and match the snapshot', () => {
    const component = renderer.create(<TroopLevel />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
